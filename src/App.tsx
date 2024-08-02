import { AppShell, Container, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavbarButtons from './components/NavbarButtons';
import EleventhFloorPage from './pages/EleventhFloorPage';
import FifthFloorPage from './pages/FifthFloorPage';
import FourthFloorPage from './pages/FourthFloorPage';
import HomePage from './pages/HomePage';
import SecondFloorPage from './pages/SecondFloorPage';

const App = (): JSX.Element => {
    const [opened, { toggle }] = useDisclosure();

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
                    <Container fluid className=''>
                        <BrowserRouter>
                            <Routes>
                                {/* <Route path='*' element={<ErrorPage />} /> */}
                                <Route path='/' element={<HomePage />} />
                                <Route
                                    path='/level-2'
                                    element={<SecondFloorPage />}
                                />
                                <Route
                                    path='/level-4'
                                    element={<FourthFloorPage />}
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
                        </BrowserRouter>
                    </Container>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
};

export default App;
