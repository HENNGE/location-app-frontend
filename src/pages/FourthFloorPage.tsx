import { useState } from 'react';
import FourthFloorMap from '../assets/4F-map.png';
import LocationDrawer from '../components/LocationDrawer';
import MapLocationComponent from '../components/MapLocationComponent';
import { CasvalUser, CasvalUserLocation } from '../types/casval.types';
import useFilteredData from '../utilities/hooks';
import { getCountIcon } from '../utilities/utilities';

interface Props {
    data: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
}

const FourthFloorPage = ({ data }: Props): JSX.Element => {
    const [open, setOpen] = useState('');
    const filteredData = useFilteredData(data);

    return (
        <div className='flex justify-center items-center'>
            <LocationDrawer
                open={open}
                handleOpen={(value) => setOpen(value)}
                data={filteredData[open] || []}
            />
            <div className='relative z-0 h-[80%] w-[85%]'>
                <img
                    src={FourthFloorMap}
                    draggable='false'
                    className='z-10 h-full w-full'
                />
                <div id='overlay' className='absolute top-0 z-20 w-full h-full'>
                    <section id='inner-lounge'>
                        <MapLocationComponent
                            name='4F (Lounge - 1)'
                            size={{
                                left: '46.7%',
                                top: '38.5%',
                                width: '15%',
                                height: '20.5%',
                            }}
                            userCount={filteredData['4F (Lounge - 1)'].length}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        {/* <div
                            onClick={() => setOpen('4F (Lounge - 1)')}
                            data-note='4F (Lounge - 1)'
                            className={`${
                                open === '4F (Lounge - 1)'
                                    ? 'opacity-100 animate-pulse border-double bg-white'
                                    : 'opacity-100'
                            } absolute rounded-lg left-[46.7%] top-[38.5%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <img
                                src={getCountIcon(
                                    filteredData['4F (Lounge - 1)'].length
                                )}
                                className='h-20 w-auto'
                            />
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] opacity-10 rounded-lg bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div> */}
                        <div
                            onClick={() => setOpen('4F (Lounge - 2)')}
                            data-note='4F (Lounge - 2)'
                            className={`${
                                open === '4F (Lounge - 2)'
                                    ? 'opacity-100 animate-pulse border-double bg-white'
                                    : 'opacity-100'
                            } absolute rounded-lg left-[62%] top-[38.5%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <img
                                src={getCountIcon(
                                    filteredData['4F (Lounge - 2)'].length
                                )}
                                className='h-20 w-auto'
                            />
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Lounge - 3)')}
                            data-note='4F (Lounge - 3)'
                            className={`${
                                open === '4F (Lounge - 3)'
                                    ? 'opacity-100 animate-pulse border-double bg-white'
                                    : 'opacity-100'
                            } absolute rounded-lg left-[77.3%] top-[38.5%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <img
                                src={getCountIcon(
                                    filteredData['4F (Lounge - 3)'].length
                                )}
                                className='h-20 w-auto'
                            />
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Lounge - 4)')}
                            data-note='4F (Lounge - 4)'
                            className={`${
                                open === '4F (Lounge - 4)'
                                    ? 'opacity-100 animate-pulse border-double bg-white'
                                    : 'opacity-100'
                            } absolute rounded-lg left-[46.7%] top-[59.7%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <img
                                src={getCountIcon(
                                    filteredData['4F (Lounge - 4)'].length
                                )}
                                className='h-20 w-auto'
                            />
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Lounge - 5)')}
                            data-note='4F (Lounge - 5)'
                            className={`absolute bg-white rounded opacity-0 left-[62%] top-[59.7%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Lounge - 6)')}
                            data-note='4F (Lounge - 6)'
                            className={`absolute bg-white rounded opacity-0 left-[77.3%] top-[59.7%] w-[15%] h-[20.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Lab - 1)')}
                            data-note='4F (Lab - 1)'
                            className={`absolute bg-white rounded opacity-0 left-[67.7%] top-[84.3%] w-[17.7%] h-[13.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                    </section>
                    <section id='forest-area'>
                        <div
                            onClick={() => setOpen('4F (Forest - 1)')}
                            data-note='4F (Forest - 1)'
                            className={`absolute bg-white rounded opacity-0 left-[2.9%] top-[13.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Forest - 2)')}
                            data-note='4F (Forest - 2)'
                            className={`absolute bg-white rounded opacity-0 left-[15.2%] top-[13.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Forest - 3)')}
                            data-note='4F (Forest - 3)'
                            className={`absolute bg-white rounded opacity-0 left-[27.5%] top-[13.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Forest - 4)')}
                            data-note='4F (Forest - 4)'
                            className={`absolute bg-white rounded opacity-0 left-[2.9%] top-[40.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Forest - 5)')}
                            data-note='4F (Forest - 5)'
                            className={`absolute bg-white rounded opacity-0 left-[15.2%] top-[40.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Forest - 6)')}
                            data-note='4F (Forest - 6)'
                            className={`absolute bg-white rounded opacity-0 left-[27.5%] top-[40.5%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Forest - 7)')}
                            data-note='4F (Forest - 7)'
                            className={`absolute bg-white rounded opacity-0 left-[2.9%] top-[67.7%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Forest - 8)')}
                            data-note='4F (Forest - 8)'
                            className={`absolute bg-white rounded opacity-0 left-[15.2%] top-[67.7%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
                        </div>
                        <div
                            onClick={() => setOpen('4F (Forest - 9)')}
                            data-note='4F (Forest - 9)'
                            className={`absolute bg-white rounded opacity-0 left-[27.5%] top-[67.7%] w-[9.9%] h-[22.2%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
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
