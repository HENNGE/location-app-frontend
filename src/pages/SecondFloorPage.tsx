import { useState } from 'react';
import useSWR from 'swr';
import SecondFloorMap from '../assets/2F-map.png';
import LoadingComponent from '../components/LoadingComponent';
import LocationDrawer from '../components/LocationDrawer';
import MapLocationComponent from '../components/MapLocationComponent';
import { FetchedCasvalData } from '../types/casval.types';
import { fetcher } from '../utilities/utilities';
import ErrorPage from './ErrorPage';

const SecondFloorPage = (): JSX.Element => {
    const [open, setOpen] = useState('');

    const { data, isLoading, error } = useSWR(
        '/location-info/2F',
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
                <div className='relative z-0 h-[80%] w-[73%]'>
                    <img
                        src={SecondFloorMap}
                        draggable='false'
                        className='z-10 h-full w-full'
                    />
                    <div
                        id='overlay'
                        className='absolute top-0 z-20 w-full h-full'
                    >
                        <section id='wide-deck'>
                            <MapLocationComponent
                                name='2F Wide Deck'
                                size={{
                                    left: '1%',
                                    top: '1.7%',
                                    width: '38.5%',
                                    height: '24%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                            />
                        </section>
                        <section id='team-lounge'>
                            <MapLocationComponent
                                name='2F Team Lounge West'
                                size={{
                                    left: '1%',
                                    top: '28%',
                                    width: '27%',
                                    height: '40%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                            />
                            <MapLocationComponent
                                name='2F Team Lounge East'
                                size={{
                                    left: '28.5%',
                                    top: '28%',
                                    width: '35%',
                                    height: '40%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                            />
                        </section>
                        <section id='small-deck'>
                            <MapLocationComponent
                                name='2F Small Deck'
                                size={{
                                    left: '50.5%',
                                    top: '50%',
                                    width: '13.5%',
                                    height: '26%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                            />
                        </section>
                        <section id='cafe-area'>
                            <MapLocationComponent
                                name='2F Cafe Area'
                                size={{
                                    left: '70%',
                                    top: '21%',
                                    width: '28.5%',
                                    height: '22.5%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                            />
                        </section>
                        <section id='internal-meeting-rooms'>
                            <MapLocationComponent
                                name='2F Internal Meeting Rooms'
                                size={{
                                    left: '70%',
                                    top: '45%',
                                    width: '28.5%',
                                    height: '32.5%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                            />
                        </section>
                        <section id='studio'>
                            <MapLocationComponent
                                name='2F-Studio'
                                size={{
                                    left: '10.5%',
                                    top: '84%',
                                    width: '23%',
                                    height: '13.5%',
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

export default SecondFloorPage;
