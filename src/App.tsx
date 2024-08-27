import { AppShell, Container, MantineProvider, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { Cache } from 'aws-amplify/utils';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import useSWR, { SWRConfig } from 'swr';
import AuthWrapper from './components/AuthWrapper';
import Header from './components/Header';
import LoadingComponent from './components/LoadingComponent';
import NavbarButtons from './components/NavbarButtons';
import EleventhFloorPage from './pages/EleventhFloorPage';
import ErrorPage from './pages/ErrorPage';
import FifthFloorPage from './pages/FifthFloorPage';
import FourthFloorPage from './pages/FourthFloorPage';
import SecondFloorPage from './pages/SecondFloorPage';
import { FetchedCasvalData } from './types/casval.types';
import { fetcher } from './utilities/utilities';

const App = (): JSX.Element => {
    const [opened, { toggle }] = useDisclosure();
    const [signoutTimestamp, setSignoutTimestamp] = useState('');

    useEffect(() => {
        Cache.getItem('signoutTimestamp').then((signoutTimestamp) =>
            setSignoutTimestamp(signoutTimestamp)
        );
    }, []);

    const { data, isLoading, error } = useSWR<FetchedCasvalData>(
        '/location-info',
        fetcher
    );

    return (
        <MantineProvider
            defaultColorScheme='light'
            theme={{
                fontFamily: 'Poppins, sans-serif',
                headings: { fontFamily: 'Poppins, sans-serif' },
            }}
        >
            <AuthWrapper>
                {!signoutTimestamp && (
                    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
                        <LoadingComponent message='Authenticating user ...' />
                    </div>
                )}
                {signoutTimestamp && (
                    <AppShell
                        header={{ height: 60 }}
                        navbar={{
                            width: 300,
                            breakpoint: 'sm',
                            collapsed: { desktop: true, mobile: !opened },
                        }}
                        padding='md'
                    >
                        <Header navbarOpen={opened} navbarToggle={toggle} />
                        <AppShell.Navbar py='md' px={4}>
                            <NavbarButtons />
                        </AppShell.Navbar>
                        <AppShell.Main>
                            <Container
                                fluid
                                className='flex justify-center items-center'
                            >
                                <BrowserRouter>
                                    <SWRConfig
                                        value={{ provider: () => new Map() }}
                                    >
                                        {error && <ErrorPage />}
                                        {isLoading && (
                                            <div className='w-full h-[50vh] flex justify-center items-center'>
                                                <LoadingComponent message='Fetching map data ...' />
                                            </div>
                                        )}
                                        {data && (
                                            <div className='flex flex-col justify-center items-center'>
                                                {data && (
                                                    <Text
                                                        c='dimmed'
                                                        size='md'
                                                        className='mb-4'
                                                    >
                                                        {`2F: ${data.secondFloor.length} | 4F: ${data.fourthFloor.length} | 5F: ${data.fifthFloor.length} | 11F: ${data.eleventhFloor.length}`}
                                                    </Text>
                                                )}
                                                <Routes>
                                                    <Route
                                                        path='*'
                                                        element={<ErrorPage />}
                                                    />
                                                    <Route
                                                        path='/'
                                                        element={
                                                            <Navigate to='/level-2' />
                                                        }
                                                    />
                                                    <Route
                                                        path='/level-2'
                                                        element={
                                                            <SecondFloorPage
                                                                data={
                                                                    data.secondFloor
                                                                }
                                                            />
                                                        }
                                                    />
                                                    <Route
                                                        path='/level-4'
                                                        element={
                                                            <FourthFloorPage
                                                                data={
                                                                    data.fourthFloor
                                                                }
                                                            />
                                                        }
                                                    />
                                                    <Route
                                                        path='/level-5'
                                                        element={
                                                            <FifthFloorPage
                                                                data={
                                                                    data.fifthFloor
                                                                }
                                                            />
                                                        }
                                                    />
                                                    <Route
                                                        path='/level-11'
                                                        element={
                                                            <EleventhFloorPage
                                                                data={
                                                                    data.eleventhFloor
                                                                }
                                                            />
                                                        }
                                                    />
                                                </Routes>
                                            </div>
                                        )}
                                    </SWRConfig>
                                </BrowserRouter>
                            </Container>
                        </AppShell.Main>
                    </AppShell>
                )}
            </AuthWrapper>
        </MantineProvider>
    );
};

export default App;
