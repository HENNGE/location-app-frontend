import { AppShell, Burger, Group, Title } from '@mantine/core';
import NavbarButtons from './NavbarButtons';

interface Props {
    navbarOpen: boolean;
    navbarToggle: () => void;
}

const Header = ({ navbarOpen, navbarToggle }: Props): JSX.Element => {
    // const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
    // const [searchValue, setSearchValue] = useState('');

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
                            HENNGE Location
                        </Title>
                    </div>

                    {/* {!isMobile && (
                        <Autocomplete
                            placeholder='Search for a user ...'
                            className='w-[30rem]'
                            value={searchValue}
                            onChange={setSearchValue}
                        />
                    )} */}

                    <Group ml='xl' gap={0} visibleFrom='sm'>
                        <NavbarButtons />
                    </Group>
                </Group>
            </Group>
        </AppShell.Header>
    );
};

export default Header;
