import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import FourthFloorMap from '../assets/4F-map.png';
import LoadingComponent from '../components/LoadingComponent';
import LocationDrawer from '../components/LocationDrawer';
import MapLocationComponent from '../components/MapLocationComponent';
import { FetchedCasvalData } from '../types/casval.types';
import { KasvotMember } from '../types/kasvot.types';
import { useTemporaryState } from '../utilities/hooks';
import { fetcher, kasvotFetcher } from '../utilities/utilities';
import ErrorPage from './ErrorPage';

const FourthFloorPage = (): JSX.Element => {
    const userEmail = useTemporaryState(useParams().id);
    const [open, setOpen] = useState('');

    const { data, isLoading, error } = useSWR(
        '/location-info/4F',
        fetcher<FetchedCasvalData[]>
    );

    const { data: kasvotMembers } = useSWR(
        `query{member{id name email imgUrl positionDepartment{id primary department{id name} position{id name priority}}}}`,
        kasvotFetcher<{ member: KasvotMember[] }>
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
                members={kasvotMembers?.member}
            />
            {isLoading && (
                <div className='w-full h-[50vh] flex justify-center items-center'>
                    <LoadingComponent message='Fetching map data ...' />
                </div>
            )}
            {data && !isLoading && (
                <div className='relative z-0 h-[80%] w-[85%]'>
                    <img
                        src={FourthFloorMap}
                        draggable='false'
                        className='z-10 h-full w-full'
                    />
                    <div
                        id='overlay'
                        className='absolute top-0 z-20 w-full h-full'
                    >
                        <section id='inner-lounge'>
                            <MapLocationComponent
                                name='4F Lounge Walkway'
                                size={{
                                    left: '46.7%',
                                    top: '38.5%',
                                    width: '15%',
                                    height: '41.5%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Lounge Center'
                                size={{
                                    left: '62.5%',
                                    top: '38.5%',
                                    width: '15%',
                                    height: '41.5%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Lounge High Table'
                                size={{
                                    left: '78.3%',
                                    top: '38.5%',
                                    width: '15%',
                                    height: '41.5%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Lab'
                                size={{
                                    left: '68%',
                                    top: '85%',
                                    width: '17.2%',
                                    height: '13%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                        </section>
                        <section id='forest-area'>
                            <MapLocationComponent
                                name='4F Forest Telecubes'
                                size={{
                                    left: '2.9%',
                                    top: '13.5%',
                                    width: '9.9%',
                                    height: '22.2%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Forest Cabinets'
                                size={{
                                    left: '15.2%',
                                    top: '13.5%',
                                    width: '9.9%',
                                    height: '22.2%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Forest Lockers'
                                size={{
                                    left: '27.5%',
                                    top: '13.5%',
                                    width: '9.9%',
                                    height: '22.2%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Forest Center Window-side'
                                size={{
                                    left: '2.9%',
                                    top: '40.5%',
                                    width: '9.9%',
                                    height: '22.2%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Forest Center'
                                size={{
                                    left: '15.2%',
                                    top: '40.5%',
                                    width: '9.9%',
                                    height: '22.2%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Forest Walkway Center'
                                size={{
                                    left: '27.5%',
                                    top: '40.5%',
                                    width: '9.9%',
                                    height: '22.2%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Forest Hallway Window-side'
                                size={{
                                    left: '2.9%',
                                    top: '67.7%',
                                    width: '9.9%',
                                    height: '22.2%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Forest Hallway Door'
                                size={{
                                    left: '15.2%',
                                    top: '67.7%',
                                    width: '9.9%',
                                    height: '22.2%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                            <MapLocationComponent
                                name='4F Forest Walkway Delivery Room'
                                size={{
                                    left: '27.5%',
                                    top: '67.7%',
                                    width: '9.9%',
                                    height: '22.2%',
                                }}
                                data={data}
                                active={open}
                                handleClick={(value) => setOpen(value)}
                                userEmail={userEmail}
                                members={kasvotMembers?.member}
                            />
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FourthFloorPage;
