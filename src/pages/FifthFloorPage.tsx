import { useState } from 'react';
import FifthFloorMap from '../assets/5F-map.png';
import LocationDrawer from '../components/LocationDrawer';
import { CasvalUser, CasvalUserLocation } from '../types/casval.types';
import useFilteredData from '../utilities/hooks';

interface Props {
    data: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
}

const FifthFloorPage = ({ data }: Props): JSX.Element => {
    const [open, setOpen] = useState('');
    const filteredData = useFilteredData(data);

    return (
        <div className='flex justify-center items-center'>
            <LocationDrawer
                open={open}
                handleOpen={(value) => setOpen(value)}
                data={filteredData[open] || []}
            />
            <div className='relative z-0 h-[80%] w-[65%]'>
                <img
                    src={FifthFloorMap}
                    draggable='false'
                    className='z-10 h-full w-full'
                />
                <div id='overlay' className='absolute top-0 z-20 w-full h-full'>
                    <section id='web-meeting-area'>
                        <div
                            onClick={() => setOpen('5F (South - 1)')}
                            data-note='5F (South - 1)'
                            className={`${
                                open === '5F (South - 1)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[1.5%] top-[2%] w-[20.2%] h-[28%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('5F (South - 2)')}
                            data-note='5F (South - 2)'
                            className={`${
                                open === '5F (South - 2)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[22%] top-[2%] w-[20.5%] h-[28%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                    </section>
                    <section id='locker-area'>
                        <div
                            onClick={() => setOpen('5F (Meeting Rooms)')}
                            data-note='5F (Meeting Rooms)'
                            className={`${
                                open === '5F (Meeting Rooms)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[1.5%] top-[39.5%] w-[42.5%] h-[30%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                    </section>
                    <section id='collaboration-area'>
                        <div
                            onClick={() => setOpen('5F (NorthWest)')}
                            data-note='5F (NorthWest)'
                            className={`${
                                open === '5F (NorthWest)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[45.2%] top-[2%] w-[46.5%] h-[23%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('5F (North)')}
                            data-note='5F (North)'
                            className={`${
                                open === '5F (North)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[45.2%] top-[26%] w-[46.5%] h-[23%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('5F (NorthEast)')}
                            data-note='5F (NorthEast)'
                            className={`${
                                open === '5F (NorthEast)' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[45.2%] top-[50%] w-[46.5%] h-[23%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
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

export default FifthFloorPage;
