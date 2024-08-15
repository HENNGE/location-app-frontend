import { AppShell, Burger, Group, Text, Title } from '@mantine/core';
import { useCallback } from 'react';
import NavbarButtons from './NavbarButtons';

interface Props {
    navbarOpen: boolean;
    navbarToggle: () => void;
}

const Header = ({ navbarOpen, navbarToggle }: Props): JSX.Element => {
    const path = window.location.pathname;

    const displayLevel = useCallback(() => {
        switch (path) {
            case '/':
                return '2F';
            case '/level-2':
                return '2F';
            case '/level-4':
                return '4F';
            case '/level-5':
                return '5F';
            case '/level-11':
                return '11F';
        }
    }, [path]);

    return (
        <AppShell.Header>
            <Group h='100%' px='md'>
                <Burger
                    opened={navbarOpen}
                    onClick={navbarToggle}
                    hiddenFrom='sm'
                    size='sm'
                />
                <Group justify='space-between' style={{ flex: 1 }}>
                    <div className='flex justify-center items-end'>
                        <Title
                            order={1}
                            className={`text-2xl font-bold md:text-3xl lg:text-4xl ml-1 md:ml-4`}
                        >
                            Location App
                        </Title>
                        <Text className='ml-4' c='dimmed' size='lg'>
                            {displayLevel()}
                        </Text>
                    </div>

                    {/* <Group>
                        <Autocomplete
                            placeholder='Search for a user ...'
                            className='w-[30rem]'
                        />
                    </Group> */}

                    <Group ml='xl' gap={0} visibleFrom='sm'>
                        <NavbarButtons />
                    </Group>
                </Group>
            </Group>
        </AppShell.Header>
    );
};

export default Header;
