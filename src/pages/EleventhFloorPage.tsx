import { Drawer } from '@mantine/core';
import { useMemo, useState } from 'react';
import EleventhFloorMap from '../assets/11F-map.png';
import DrawerContainer from '../components/DrawerContainer';
import { CasvalUser, CasvalUserLocation } from '../types/casval.types';

interface Props {
    data: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
}

const EleventhFloorPage = ({ data }: Props): JSX.Element => {
    console.log(data);
    const [open, setOpen] = useState('');
    const filteredData = useMemo(() => {
        const output: {
            [key: string]: {
                user: CasvalUser;
                userLocation: CasvalUserLocation;
            }[];
        } = {
            '11F (Blue)': [],
            '11F (Meeting Area - Near Center)': [],
            '11F (Meeting Area - Near North Door)': [],
            '11F (Lounge)': [],
            '11F (Lounge - Near South Door)': [],
        };

        data.forEach((user) => {
            switch (user.userLocation.name) {
                case '11F (Blue)':
                    output[user.userLocation.name].push(user);
                    return;
                case '11F (Meeting Area - Near Center)':
                    output[user.userLocation.name].push(user);
                    return;
                case '11F (Meeting Area - Near North Door)':
                    output[user.userLocation.name].push(user);
                    return;
                case '11F (Lounge)':
                    output[user.userLocation.name].push(user);
                    return;
                case '11F (Lounge - Near South Door)':
                    output[user.userLocation.name].push(user);
                    return;
            }
        });

        return output;
    }, [data]);

    return (
        <div className='flex justify-center items-center'>
            <Drawer
                opened={!!open}
                onClose={() => setOpen('')}
                position={open.includes('Lounge') ? 'right' : 'left'}
                offset={8}
                radius='md'
                size='xs'
                title={open}
            >
                <DrawerContainer data={filteredData[open] || []} />
            </Drawer>
            <div className='relative z-0 h-[80%] w-[65%]'>
                <img
                    src={EleventhFloorMap}
                    draggable='false'
                    className='z-10 h-full w-full'
                />
                <div id='overlay' className='absolute top-0 z-20 w-full h-full'>
                    <section id='guest-meeting-rooms'>
                        <div
                            onClick={() => setOpen('11F (Blue)')}
                            data-note='11F (Blue)'
                            className={`${
                                open === '11F (Blue)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[45.1%] top-[2%] w-[46.7%] h-[28%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() =>
                                setOpen('11F (Meeting Area - Near Center)')
                            }
                            data-note='11F (Meeting Area - Near Center)'
                            className={`${
                                open === '11F (Meeting Area - Near Center)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[45.1%] top-[30.5%] w-[46.7%] h-[25%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() =>
                                setOpen('11F (Meeting Area - Near North Door)')
                            }
                            data-note='11F (Meeting Area - Near North Door)'
                            className={`${
                                open ===
                                    '11F (Meeting Area - Near North Door)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[45.1%] top-[56%] w-[46.7%] h-[22%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                    </section>
                    <section id='open-lounge'>
                        <div
                            onClick={() => setOpen('11F (Lounge)')}
                            data-note='11F (Lounge)'
                            className={`${
                                open === '11F (Lounge)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[1.5%] top-[15%] w-[43%] h-[30%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() =>
                                setOpen('11F (Lounge - Near South Door)')
                            }
                            data-note='11F (Lounge - Near South Door)'
                            className={`${
                                open === '11F (Lounge - Near South Door)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[1.5%] top-[45.5%] w-[43%] h-[30%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default EleventhFloorPage;
