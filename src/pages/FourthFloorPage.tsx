import { useMemo } from 'react';
import FourthFloorMap from '../assets/4F-map.png';
import WifiHoverComponent from '../components/WifiHoverComponent';
import { CasvalUser, CasvalUserLocation } from '../types/casval.types';

interface Props {
    data: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
}

const FourthFloorPage = ({ data }: Props): JSX.Element => {
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
    console.log(filteredData);
    return (
        <div className='flex justify-center items-center'>
            <img
                src={FourthFloorMap}
                draggable='false'
                className='block relative h-[80%] w-[90%]'
            />
            <section className='absolute h-full w-full border'>
                {/* <section id='inner-lounge' className='border border-red-500'>
                    <WifiHoverComponent
                        name='4F (Lounge - 1)'
                        left={47}
                        top={41}
                        width={13}
                        height={17}
                        data={filteredData['4F (Lounge - 1)']}
                    />
                    <WifiHoverComponent
                        name='4F (Lounge - 2)'
                        left={60.5}
                        top={41}
                        width={13}
                        height={17}
                        data={filteredData['4F (Lounge - 2)']}
                    />
                    <WifiHoverComponent
                        name='4F (Lounge - 3)'
                        left={74}
                        top={41}
                        width={13}
                        height={17}
                        data={filteredData['4F (Lounge - 3)']}
                    />
                    <WifiHoverComponent
                        name='4F (Lounge - 4)'
                        left={47}
                        top={59}
                        width={13}
                        height={15.3}
                        data={filteredData['4F (Lounge - 4)']}
                    />
                    <WifiHoverComponent
                        name='4F (Lounge - 5)'
                        left={60.5}
                        top={59}
                        width={13}
                        height={15.3}
                        data={filteredData['4F (Lounge - 5)']}
                    />
                    <WifiHoverComponent
                        name='4F (Lounge - 6)'
                        left={74}
                        top={59}
                        width={13}
                        height={15.3}
                        data={filteredData['4F (Lounge - 6)']}
                    />
                    <WifiHoverComponent
                        name='4F (Lab - 1)'
                        left={65}
                        top={77.1}
                        width={16}
                        height={10.7}
                        data={filteredData['4F (Lab - 1)']}
                    />
                </section> */}
                <section id='forest-area'>
                    <WifiHoverComponent
                        name='4F (Forest - 1)'
                        left={9.4}
                        top={21}
                        width={8.6}
                        height={17.7}
                        data={filteredData['4F (Forest - 1)']}
                    />
                    <WifiHoverComponent
                        name='4F (Forest - 2)'
                        left={20}
                        top={21}
                        width={8.6}
                        height={17.7}
                        data={filteredData['4F (Forest - 2)']}
                    />
                    <WifiHoverComponent
                        name='4F (Forest - 3)'
                        left={30.5}
                        top={21}
                        width={8.6}
                        height={17.7}
                        data={filteredData['4F (Forest - 3)']}
                    />
                    <WifiHoverComponent
                        name='4F (Forest - 4)'
                        left={9.4}
                        top={42.5}
                        width={8.6}
                        height={17.7}
                        data={filteredData['4F (Forest - 4)']}
                    />
                    <WifiHoverComponent
                        name='4F (Forest - 5)'
                        left={20}
                        top={42.5}
                        width={8.6}
                        height={17.7}
                        data={filteredData['4F (Forest - 5)']}
                    />
                    <WifiHoverComponent
                        name='4F (Forest - 6)'
                        left={30.5}
                        top={42.5}
                        width={8.6}
                        height={17.7}
                        data={filteredData['4F (Forest - 6)']}
                    />
                    <WifiHoverComponent
                        name='4F (Forest - 7)'
                        left={9.4}
                        top={64}
                        width={8.6}
                        height={17.7}
                        data={filteredData['4F (Forest - 7)']}
                    />
                    <WifiHoverComponent
                        name='4F (Forest - 8)'
                        left={20}
                        top={64}
                        width={8.6}
                        height={17.7}
                        data={filteredData['4F (Forest - 8)']}
                    />
                    <WifiHoverComponent
                        name='4F (Forest - 9)'
                        left={30.5}
                        top={64}
                        width={8.6}
                        height={17.7}
                        data={filteredData['4F (Forest - 9)']}
                    />
                </section>
            </section>
        </div>
    );
};

export default FourthFloorPage;
