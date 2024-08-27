import { ActionIcon, AppShell, Burger, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import NavbarButtons from './NavbarButtons';
import SearchModal from './SearchModal';

interface Props {
    navbarOpen: boolean;
    navbarToggle: () => void;
}

const Header = ({ navbarOpen, navbarToggle }: Props): JSX.Element => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <AppShell.Header>
            <Group h='100%' px='md'>
                <Burger
                    opened={navbarOpen}
                    onClick={navbarToggle}
                    hiddenFrom='sm'
                    size='sm'
                />
                <Group
                    justify='space-between'
                    style={{ flex: 1 }}
                    className='flex'
                >
                    <div className='flex justify-center items-center'>
                        <Title
                            order={1}
                            className={`text-2xl font-bold md:text-3xl lg:text-4xl ml-1 md:ml-4`}
                        >
                            HENNGE Location
                        </Title>
                        <ActionIcon
                            variant='subtle'
                            aria-label='Search'
                            color='black'
                            ml='md'
                            onClick={open}
                        >
                            <IconSearch
                                style={{ width: '100%', height: '100%' }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </div>

                    <Group ml='xl' gap={0} visibleFrom='sm'>
                        <NavbarButtons />
                    </Group>
                </Group>
            </Group>
            <SearchModal opened={opened} close={close} />
        </AppShell.Header>
    );
};

export default Header;
