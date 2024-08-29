import { useState } from 'react';
import FourthFloorMap from '../assets/4F-map.png';

const FourthFloorPage = (): JSX.Element => {
    const [open, setOpen] = useState('');

    return (
        <div className='flex justify-center items-center'>
            {/* <LocationDrawer
                open={open}
                handleOpen={(value) => setOpen(value)}
                data={filteredData[open] || []}
            /> */}
            <div className='relative z-0 h-[80%] w-[85%]'>
                <img
                    src={FourthFloorMap}
                    draggable='false'
                    className='z-10 h-full w-full'
                />
                {/* <div id='overlay' className='absolute top-0 z-20 w-full h-full'>
                    <section id='inner-lounge'>
                        <MapLocationComponent
                            name='4F (Lounge - 1)'
                            size={{
                                left: '46.7%',
                                top: '38.5%',
                                width: '15%',
                                height: '20.5%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Lounge - 2)'
                            size={{
                                left: '62%',
                                top: '38.5%',
                                width: '15%',
                                height: '20.5%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Lounge - 3)'
                            size={{
                                left: '77.3%',
                                top: '38.5%',
                                width: '15%',
                                height: '20.5%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Lounge - 4)'
                            size={{
                                left: '46.7%',
                                top: '59.7%',
                                width: '15%',
                                height: '20.5%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Lounge - 5)'
                            size={{
                                left: '62%',
                                top: '59.7%',
                                width: '15%',
                                height: '20.5%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Lounge - 6)'
                            size={{
                                left: '77.3%',
                                top: '59.7%',
                                width: '15%',
                                height: '20.5%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Lab - 1)'
                            size={{
                                left: '67.7%',
                                top: '84.3%',
                                width: '17.7%',
                                height: '13.5%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                    </section>
                    <section id='forest-area'>
                        <MapLocationComponent
                            name='4F (Forest - 1)'
                            size={{
                                left: '2.9%',
                                top: '13.5%',
                                width: '9.9%',
                                height: '22.2%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Forest - 2)'
                            size={{
                                left: '15.2%',
                                top: '13.5%',
                                width: '9.9%',
                                height: '22.2%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Forest - 3)'
                            size={{
                                left: '27.5%',
                                top: '13.5%',
                                width: '9.9%',
                                height: '22.2%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Forest - 4)'
                            size={{
                                left: '2.9%',
                                top: '40.5%',
                                width: '9.9%',
                                height: '22.2%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Forest - 5)'
                            size={{
                                left: '15.2%',
                                top: '40.5%',
                                width: '9.9%',
                                height: '22.2%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Forest - 6)'
                            size={{
                                left: '27.5%',
                                top: '40.5%',
                                width: '9.9%',
                                height: '22.2%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Forest - 7)'
                            size={{
                                left: '2.9%',
                                top: '67.7%',
                                width: '9.9%',
                                height: '22.2%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Forest - 8)'
                            size={{
                                left: '15.2%',
                                top: '67.7%',
                                width: '9.9%',
                                height: '22.2%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                        <MapLocationComponent
                            name='4F (Forest - 9)'
                            size={{
                                left: '27.5%',
                                top: '67.7%',
                                width: '9.9%',
                                height: '22.2%',
                            }}
                            data={filteredData}
                            active={open}
                            handleClick={(value) => setOpen(value)}
                        />
                    </section>
                </div> */}
            </div>
        </div>
    );
};

export default FourthFloorPage;
