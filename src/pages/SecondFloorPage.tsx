import { useState } from 'react';
import SecondFloorMap from '../assets/2F-map.png';
import LocationDrawer from '../components/LocationDrawer';
import { CasvalUser, CasvalUserLocation } from '../types/casval.types';
import useFilteredData from '../utilities/hooks';

interface Props {
    data: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
}

const SecondFloorPage = ({ data }: Props): JSX.Element => {
    const [open, setOpen] = useState('');
    const filteredData = useFilteredData(data);

    return (
        <div className='flex justify-center items-center'>
            <LocationDrawer
                open={open}
                handleOpen={(value) => setOpen(value)}
                data={filteredData[open] || []}
            />
            <div className='relative z-0 h-[80%] w-[78%]'>
                <img
                    src={SecondFloorMap}
                    draggable='false'
                    className='z-10 h-full w-full'
                />
                <div id='overlay' className='absolute top-0 z-20 w-full h-full'>
                    <section id='wide-deck'>
                        <div
                            onClick={() => setOpen('2F-Wide-Deck-AP-1')}
                            data-note='2F-Wide-Deck-AP-1'
                            className={`${
                                open === '2F-Wide-Deck-AP-1' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[1%] top-[1.7%] w-[15%] h-[15%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Wide-Deck-AP-2')}
                            data-note='2F-Wide-Deck-AP-2'
                            className={`${
                                open === '2F-Wide-Deck-AP-2' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[16.5%] top-[1.7%] w-[15%] h-[15%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Wide-Deck-AP-3')}
                            data-note='2F-Wide-Deck-AP-3'
                            className={`${
                                open === '2F-Wide-Deck-AP-3' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[11.5%] top-[17.5%] w-[27%] h-[10%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Wide-Deck-AP-4')}
                            data-note='2F-Wide-Deck-AP-4'
                            className={`${
                                open === '2F-Wide-Deck-AP-4' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[1%] top-[17.5%] w-[10%] h-[21.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                    </section>
                    <section id='team-lounge'>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-BYOD-AP-01')}
                            data-note='2F-Team-Lounge-BYOD-AP-01'
                            className={`${
                                open === '2F-Team-Lounge-BYOD-AP-01' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[11.5%] top-[28%] w-[25%] h-[11%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-BYOD-AP-03')}
                            data-note='2F-Team-Lounge-BYOD-AP-03'
                            className={`${
                                open === '2F-Team-Lounge-BYOD-AP-03' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[32.5%] top-[52.8%] w-[8%] h-[12%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-01')}
                            data-note='2F-Team-Lounge-AP-01'
                            className={`${
                                open === '2F-Team-Lounge-AP-01' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[37%] top-[28%] w-[12%] h-[11%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-02')}
                            data-note='2F-Team-Lounge-AP-02'
                            className={`${
                                open === '2F-Team-Lounge-AP-02' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[49.5%] top-[28%] w-[12%] h-[11%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-03')}
                            data-note='2F-Team-Lounge-AP-03'
                            className={`${
                                open === '2F-Team-Lounge-AP-03' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[7%] top-[40%] w-[8%] h-[12%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-04')}
                            data-note='2F-Team-Lounge-AP-04'
                            className={`${
                                open === '2F-Team-Lounge-AP-04' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[15.5%] top-[40%] w-[8%] h-[12%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-05')}
                            data-note='2F-Team-Lounge-AP-05'
                            className={`${
                                open === '2F-Team-Lounge-AP-05' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[24%] top-[40%] w-[8%] h-[12%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-06')}
                            data-note='2F-Team-Lounge-AP-06'
                            className={`${
                                open === '2F-Team-Lounge-AP-06' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[41%] top-[40%] w-[8%] h-[12%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-07')}
                            data-note='2F-Team-Lounge-AP-07'
                            className={`${
                                open === '2F-Team-Lounge-AP-07' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[32.5%] top-[40%] w-[8%] h-[12%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-08')}
                            data-note='2F-Team-Lounge-AP-08'
                            className={`${
                                open === '2F-Team-Lounge-AP-08' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[49.5%] top-[40%] w-[8%] h-[18%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-09')}
                            data-note='2F-Team-Lounge-AP-09'
                            className={`${
                                open === '2F-Team-Lounge-AP-09' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[7%] top-[52.8%] w-[8%] h-[12%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-10')}
                            data-note='2F-Team-Lounge-AP-10'
                            className={`${
                                open === '2F-Team-Lounge-AP-10' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[15.5%] top-[52.8%] w-[8%] h-[12%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-11')}
                            data-note='2F-Team-Lounge-AP-11'
                            className={`${
                                open === '2F-Team-Lounge-AP-11' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[24%] top-[52.8%] w-[8%] h-[12%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Team-Lounge-AP-12')}
                            data-note='2F-Team-Lounge-AP-12'
                            className={`${
                                open === '2F-Team-Lounge-AP-12' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[41%] top-[52.8%] w-[8%] h-[12%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                    </section>
                    <section id='small-deck'>
                        <div
                            onClick={() => setOpen('2F-Small-Deck-BYOD-AP')}
                            data-note='2F-Small-Deck-BYOD-AP'
                            className={`${
                                open === '2F-Small-Deck-BYOD-AP' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[57.5%] top-[50%] w-[7%] h-[14.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Small-Deck-AP')}
                            data-note='2F-Small-Deck-AP'
                            className={`${
                                open === '2F-Small-Deck-AP' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[50%] top-[65%] w-[14%] h-[12.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                    </section>
                    <section id='cafe-area'>
                        <div
                            onClick={() => setOpen('2F-Cafe-BYOD-AP')}
                            data-note='2F-Cafe-BYOD-AP'
                            className={`${
                                open === '2F-Cafe-BYOD-AP' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[70%] top-[21%] w-[16.5%] h-[9%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Cafe-AP-1')}
                            data-note='2F-Cafe-AP-1'
                            className={`${
                                open === '2F-Cafe-AP-1' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[70%] top-[30.5%] w-[8%] h-[13.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Cafe-AP-2')}
                            data-note='2F-Cafe-AP-2'
                            className={`${
                                open === '2F-Cafe-AP-2' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[78.5%] top-[30.5%] w-[8%] h-[13.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Cafe-AP-3')}
                            data-note='2F-Cafe-AP-3'
                            className={`${
                                open === '2F-Cafe-AP-3' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[87%] top-[21%] w-[11.5%] h-[23%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                    </section>
                    <section id='internal-meeting-rooms'>
                        <div
                            onClick={() => setOpen('2F-Meeting-BYOD-AP')}
                            data-note='2F-Meeting-BYOD-AP'
                            className={`${
                                open === '2F-Meeting-BYOD-AP' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[80.5%] top-[61.5%] w-[18.2%] h-[7%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() =>
                                setOpen('2F-Meeting-Transparency-AP')
                            }
                            data-note='2F-Meeting-Transparency-AP'
                            className={`${
                                open === '2F-Meeting-Transparency-AP' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[72.2%] top-[45%] w-[8%] h-[19.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() =>
                                setOpen('2F-Meeting-Win-Together-AP')
                            }
                            data-note='2F-Meeting-Win-Together-AP'
                            className={`${
                                open === '2F-Meeting-Win-Together-AP' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[81%] top-[45%] w-[17.8%] h-[15%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
                        >
                            <span
                                className={`absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 hover:animate-ping hover:opacity-100`}
                            />
                        </div>
                        <div
                            onClick={() => setOpen('2F-Meeting-Passion-AP')}
                            data-note='2F-Meeting-Passion-AP'
                            className={`${
                                open === '2F-Meeting-Passion-AP' &&
                                'opacity-80 animate-bounce'
                            } absolute bg-white rounded opacity-10 left-[80.5%] top-[69%] w-[18.2%] h-[8.5%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
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

export default SecondFloorPage;
