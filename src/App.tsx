import { AppShell, Container, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { Cache } from 'aws-amplify/utils';
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';
import AuthWrapper from './components/AuthWrapper';
import Header from './components/Header';
import LoadingComponent from './components/LoadingComponent';
import NavbarButtons from './components/NavbarButtons';
import EleventhFloorPage from './pages/EleventhFloorPage';
import FifthFloorPage from './pages/FifthFloorPage';
import FourthFloorPage from './pages/FourthFloorPage';
import NotFoundPage from './pages/NotFoundPage';
import SecondFloorPage from './pages/SecondFloorPage';

const App = (): JSX.Element => {
    const [opened, { toggle }] = useDisclosure();
    const [signoutTimestamp, setSignoutTimestamp] = useState('');

    useEffect(() => {
        Cache.getItem('signoutTimestamp').then((signoutTimestamp) =>
            setSignoutTimestamp(signoutTimestamp || '')
        );
    }, []);

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
                                        {signoutTimestamp && (
                                            <div className='flex flex-col justify-center items-center'>
                                                <Routes>
                                                    <Route
                                                        path='*'
                                                        element={
                                                            <NotFoundPage />
                                                        }
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
                                                            <SecondFloorPage />
                                                        }
                                                    />
                                                    <Route
                                                        path='/level-4'
                                                        element={
                                                            <FourthFloorPage />
                                                        }
                                                    />
                                                    <Route
                                                        path='/level-5'
                                                        element={
                                                            <FifthFloorPage />
                                                        }
                                                    />
                                                    <Route
                                                        path='/level-11'
                                                        element={
                                                            <EleventhFloorPage />
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
