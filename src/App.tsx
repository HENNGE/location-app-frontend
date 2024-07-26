import { AppShell, Container, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import Header from './components/Header';
import NavbarButtons from './components/NavbarButtons';

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nu
                    </Container>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
};

export default App;
