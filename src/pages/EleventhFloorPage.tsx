import { useState } from 'react';
import useSWR from 'swr';
import EleventhFloorMap from '../assets/11F-map.png';
import LoadingComponent from '../components/LoadingComponent';
import LocationDrawer from '../components/LocationDrawer';
import MapLocationComponent from '../components/MapLocationComponent';
import { FetchedCasvalData } from '../types/casval.types';
import { fetcher } from '../utilities/utilities';
import ErrorPage from './ErrorPage';

const EleventhFloorPage = (): JSX.Element => {
    const [open, setOpen] = useState('');

    const { data, isLoading, error } = useSWR(
        '/location-info/11F',
        fetcher<FetchedCasvalData[]>
    );

    if (error) {
        return <ErrorPage />;
    }

    return (
        <div className='flex justify-center items-center'>
            <LocationDrawer
                open={open}
                handleOpen={(value) => setOpen(value)}
                data={data || []}
            />
            {isLoading && (
                <div className='w-full h-[50vh] flex justify-center items-center'>
                    <LoadingComponent message='Fetching map data ...' />
                </div>
            )}
            {data && !isLoading && (
                <div className='relative z-0 h-[80%] w-[61%]'>
                    <img
                        src={EleventhFloorMap}
                        draggable='false'
                        className='z-10 h-full w-full'
                    />
                    <div
                        id='overlay'
                        className='absolute top-0 z-20 w-full h-full'
                    >
                        <section id='guest-meeting-rooms'>
                            <MapLocationComponent
                                name='11F Guest Meeting Rooms'
                                size={{
                                    left: '45.5%',
                                    top: '2%',
                                    width: '46%',
                                    height: '75.5%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                            />
                        </section>
                        <section id='open-lounge'>
                            <MapLocationComponent
                                name='11F Open Lounge'
                                size={{
                                    left: '1.5%',
                                    top: '15.5%',
                                    width: '43%',
                                    height: '62%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                            />
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EleventhFloorPage;
