import { AppShell, Container, Loader, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import useSWR from 'swr';
import Header from './components/Header';
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

    const { data, isLoading, error } = useSWR<FetchedCasvalData>(
        '/location-info',
        fetcher
    );

    return (
        <MantineProvider
            defaultColorScheme='light'
            theme={{ fontFamily: 'Poppins, sans-serif' }}
        >
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
                            {error && <ErrorPage />}
                            {isLoading && <Loader />}
                            {data && (
                                <Routes>
                                    <Route path='*' element={<ErrorPage />} />
                                    <Route
                                        path='/'
                                        element={<Navigate to='/level-2' />}
                                    />
                                    <Route
                                        path='/level-2'
                                        element={<SecondFloorPage />}
                                    />
                                    <Route
                                        path='/level-4'
                                        element={
                                            <FourthFloorPage
                                                data={data.fourthFloor}
                                            />
                                        }
                                    />
                                    <Route
                                        path='/level-5'
                                        element={<FifthFloorPage />}
                                    />
                                    <Route
                                        path='/level-11'
                                        element={<EleventhFloorPage />}
                                    />
                                </Routes>
                            )}
                        </BrowserRouter>
                    </Container>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
};

export default App;
