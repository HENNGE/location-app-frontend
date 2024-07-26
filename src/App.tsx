import {
    AppShell,
    Burger,
    Group,
    MantineProvider,
    Title,
    UnstyledButton,
} from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';

function App() {
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
                <AppShell.Header>
                    <Group h='100%' px='md'>
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom='sm'
                            size='sm'
                        />
                        <Group justify='space-between' style={{ flex: 1 }}>
                            <Title
                                order={1}
                                className={`text-2xl font-bold md:text-3xl lg:text-4xl ml-1 md:ml-4`}
                            >
                                Location App
                            </Title>

                            <Group ml='xl' gap={0} visibleFrom='sm'>
                                <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                                    Home
                                </UnstyledButton>
                                <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                                    Blog
                                </UnstyledButton>
                                <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                                    Contacts
                                </UnstyledButton>
                                <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                                    Support
                                </UnstyledButton>
                            </Group>
                        </Group>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar py='md' px={4}>
                    <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                        Home
                    </UnstyledButton>
                    <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                        Blog
                    </UnstyledButton>
                    <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                        Contacts
                    </UnstyledButton>
                    <UnstyledButton className='block px-4 py-1 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800'>
                        Support
                    </UnstyledButton>
                </AppShell.Navbar>

                <AppShell.Main>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nu
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
