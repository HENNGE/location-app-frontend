import { Tooltip } from '@mantine/core';
import { CasvalUser, CasvalUserLocation } from '../types/casval.types';

interface Props {
    name: string;
    left: number;
    top: number;
    width: number;
    height: number;
    data: {
        user: CasvalUser;
        userLocation: CasvalUserLocation;
    }[];
}

const WifiHoverComponent = ({
    name,
    left,
    top,
    width,
    height,
    data,
}: Props) => {
    const className = `left-[${left}%] top-[${top}%] w-[${width}%] h-[${height}%]`;
    return (
        <Tooltip
            label={
                <div className='h-auto w-[20rem]'>
                    {data.map((user) => (
                        <div className='w-full'>{user.user.email}</div>
                    ))}
                </div>
            }
        >
            <div
                onMouseOver={() => console.log('test')}
                data-note={name}
                className={`absolute bg-white rounded opacity-0 hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center ${className}`}
            >
                <span className='animate-none absolute inline-flex h-[100%] w-[100%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
            </div>
        </Tooltip>
    );
};

export default WifiHoverComponent;
