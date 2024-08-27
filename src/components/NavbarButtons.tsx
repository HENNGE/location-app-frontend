import { UnstyledButton } from '@mantine/core';

const NavbarButtons = (): JSX.Element => {
    const path = window.location.pathname;
    return (
        <div className='flex flex-col space-y-1 sm:space-y-0 sm:space-x-1 sm:flex-row'>
            <a href='/level-2'>
                <UnstyledButton
                    className={`block px-4 py-1 rounded-md font-medium transition-colors duration-200 hover:bg-[#003366] hover:text-white ${
                        path === '/level-2' && 'bg-[#003366] text-white'
                    }`}
                >
                    2F
                </UnstyledButton>
            </a>
            <a href='/level-4'>
                <UnstyledButton
                    className={`block px-4 py-1 rounded-md font-medium transition-colors duration-200 hover:bg-[#003366] hover:text-white ${
                        path === '/level-4' && 'bg-[#003366] text-white'
                    }`}
                >
                    4F
                </UnstyledButton>
            </a>
            <a href='/level-5'>
                <UnstyledButton
                    className={`block px-4 py-1 rounded-md font-medium transition-colors duration-200 hover:bg-[#003366] hover:text-white ${
                        path === '/level-5' && 'bg-[#003366] text-white'
                    }`}
                >
                    5F
                </UnstyledButton>
            </a>
            <a href='/level-11'>
                <UnstyledButton
                    className={`block px-4 py-1 rounded-md font-medium transition-colors duration-200 hover:bg-[#003366] hover:text-white ${
                        path === '/level-11' && 'bg-[#003366] text-white'
                    }`}
                >
                    11F
                </UnstyledButton>
            </a>
        </div>
    );
};

export default NavbarButtons;
