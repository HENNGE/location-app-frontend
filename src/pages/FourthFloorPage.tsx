import { Drawer } from '@mantine/core';
import { useMemo, useState } from 'react';
import FourthFloorMap from '../assets/4F-map.png';
import { CasvalUser, CasvalUserLocation } from '../types/casval.types';

interface Props {
    data: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
}

const FourthFloorPage = ({ data }: Props): JSX.Element => {
    const [open, setOpen] = useState('');
    const filteredData = useMemo(() => {
        const output: {
            [key: string]: {
                user: CasvalUser;
                userLocation: CasvalUserLocation;
            }[];
        } = {
            '4F (Lounge - 1)': [],
            '4F (Lounge - 2)': [],
            '4F (Lounge - 3)': [],
            '4F (Lounge - 4)': [],
            '4F (Lounge - 5)': [],
            '4F (Lounge - 6)': [],

            '4F (Lab - 1)': [],

            '4F (Forest - 1)': [],
            '4F (Forest - 2)': [],
            '4F (Forest - 3)': [],
            '4F (Forest - 4)': [],
            '4F (Forest - 5)': [],
            '4F (Forest - 6)': [],
            '4F (Forest - 7)': [],
            '4F (Forest - 8)': [],
            '4F (Forest - 9)': [],
        };

        data.forEach((user) => {
            switch (user.userLocation.name) {
                case '4F (Lounge - 1)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Lounge - 2)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Lounge - 3':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Lounge - 4)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Lounge - 5)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Lounge - 6)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Lab - 1)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Forest - 1)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Forest - 2)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Forest - 3)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Forest - 4)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Forest - 5)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Forest - 6)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Forest - 7)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Forest - 8)':
                    output[user.userLocation.name].push(user);
                    return;
                case '4F (Forest - 9)':
                    output[user.userLocation.name].push(user);
                    return;
            }
        });

        return output;
    }, [data]);

    return (
        <div className='flex justify-center items-center'>
            <div className='relative z-0 h-[80%] w-[90%]'>
                <img
                    src={FourthFloorMap}
                    draggable='false'
                    className='z-10 h-full w-full'
                />
                <div id='overlay' className='absolute top-0 z-20 w-full h-full'>
                    <section id='inner-lounge'>
                        <Drawer
                            opened={!!open}
                            onClose={() => setOpen('')}
                            offset={8}
                            radius='md'
                            size='xs'
                        >
                            <div className='h-full w-[20rem] overflow-y-auto'>
                                {filteredData['4F (Lounge - 1)'].map((user) => (
                                    <div className='w-full'>
                                        {user.user.email}
                                    </div>
                                ))}
                            </div>
                        </Drawer>
                        <div
                            onClick={() => setOpen('4F (Lounge - 1)')}
                            data-note='4F (Lounge - 1)'
                            className={`absolute bg-white rounded opacity-10 left-[46.7%] top-[38.5%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`${
                                    open === '4F (Lounge - 1)'
                                        ? 'animate-ping opacity-0'
                                        : 'animate-none opacity-0'
                                } absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            data-note='4F (Lounge - 2)'
                            className={`absolute bg-white rounded opacity-0 left-[62%] top-[38.5%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Lounge - 3)'
                            className={`absolute bg-white rounded opacity-0 left-[77.3%] top-[38.5%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Lounge - 4)'
                            className={`absolute bg-white rounded opacity-0 left-[46.7%] top-[59.7%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Lounge - 5)'
                            className={`absolute bg-white rounded opacity-0 left-[62%] top-[59.7%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Lounge - 6)'
                            className={`absolute bg-white rounded opacity-0 left-[77.3%] top-[59.7%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Lab - 1)'
                            className={`absolute bg-white rounded opacity-0 left-[67.7%] top-[84.3%] w-[17.7%] h-[13.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                    </section>
                    <section id='forest-area'>
                        <div
                            data-note='4F (Forest - 1)'
                            className={`absolute bg-white rounded opacity-0 left-[2.9%] top-[13.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Forest - 2)'
                            className={`absolute bg-white rounded opacity-0 left-[15.2%] top-[13.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Forest - 3)'
                            className={`absolute bg-white rounded opacity-0 left-[27.5%] top-[13.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Forest - 4)'
                            className={`absolute bg-white rounded opacity-0 left-[2.9%] top-[40.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Forest - 5)'
                            className={`absolute bg-white rounded opacity-0 left-[15.2%] top-[40.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Forest - 6)'
                            className={`absolute bg-white rounded opacity-0 left-[27.5%] top-[40.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Forest - 7)'
                            className={`absolute bg-white rounded opacity-0 left-[2.9%] top-[67.7%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Forest - 8)'
                            className={`absolute bg-white rounded opacity-0 left-[15.2%] top-[67.7%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            data-note='4F (Forest - 9)'
                            className={`absolute bg-white rounded opacity-0 left-[27.5%] top-[64%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default FourthFloorPage;
