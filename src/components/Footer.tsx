import { AppShell, Text } from '@mantine/core';

const Footer = (): JSX.Element => {
    return (
        <AppShell.Footer className='flex justify-center items-center border-none p-4'>
            <div className='flex flex-col'>
                <Text c='dimmed' size='xs'>
                    *Location is approximate, based on the Wi-Fi connection of
                    the person's laptop.
                </Text>
                <Text c='dimmed' size='xs'>
                    *Location is refreshed every few minutes, which means data
                    can potentially be out of date.
                </Text>
            </div>
        </AppShell.Footer>
    );
};

export default Footer;
