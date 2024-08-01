import { AppShell, Container, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavbarButtons from './components/NavbarButtons';
import FourthFloorPage from './pages/FourthFloorPage';

const App = (): JSX.Element => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <MantineProvider
            defaultColorScheme='auto'
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
                                <Route path='/' element={<div>Home</div>} />
                                <Route
                                    path='/level-2'
                                    element={<div>2F</div>}
                                />
                                <Route
                                    path='/level-4'
                                    element={<FourthFloorPage />}
                                />
                                <Route
                                    path='/level-5'
                                    element={<div>5F</div>}
                                />
                                <Route
                                    path='/level-11'
                                    element={<div>11F</div>}
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
