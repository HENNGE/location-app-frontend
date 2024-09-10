import { UnstyledButton } from '@mantine/core';

const NavbarButtons = (): JSX.Element => {
    const path = window.location.pathname;

    return (
        <div className='flex flex-col space-y-1 sm:space-y-0 sm:space-x-1 sm:flex-row'>
            <UnstyledButton
                className={`block px-4 py-1 rounded-md font-medium transition-colors duration-200 hover:bg-[#003366] hover:text-white focus:bg-[#003366] focus:text-white ${
                    path === '/level-2' ? 'bg-[#003366] text-white' : ''
                }`}
                component='a'
                role='button'
                aria-label='2F button'
                href='/level-2'
            >
                2F
            </UnstyledButton>
            <UnstyledButton
                className={`block px-4 py-1 rounded-md font-medium transition-colors duration-200 hover:bg-[#003366] hover:text-white focus:bg-[#003366] focus:text-white ${
                    path === '/level-4' ? 'bg-[#003366] text-white' : ''
                }`}
                component='a'
                role='button'
                aria-label='4F button'
                href='/level-4'
            >
                4F
            </UnstyledButton>

            <UnstyledButton
                className={`block px-4 py-1 rounded-md font-medium transition-colors duration-200 hover:bg-[#003366] hover:text-white focus:bg-[#003366] focus:text-white ${
                    path === '/level-5' ? 'bg-[#003366] text-white' : ''
                }`}
                component='a'
                role='button'
                aria-label='5F button'
                href='/level-5'
            >
                5F
            </UnstyledButton>
            <UnstyledButton
                className={`block px-4 py-1 rounded-md font-medium transition-colors duration-200 hover:bg-[#003366] hover:text-white focus:bg-[#003366] focus:text-white ${
                    path === '/level-11' ? 'bg-[#003366] text-white' : ''
                }`}
                component='a'
                role='button'
                aria-label='11F button'
                href='/level-11'
            >
                11F
            </UnstyledButton>
        </div>
    );
};

export default NavbarButtons;
