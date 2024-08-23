import { CasvalUser, CasvalUserLocation } from '../types/casval.types';
import { getCountIcon } from '../utilities/utilities';

interface Props {
    name: string;
    size: {
        left: string;
        top: string;
        width: string;
        height: string;
    };
    data: {
        [key: string]: {
            user: CasvalUser;
            userLocation: CasvalUserLocation;
        }[];
    };
    active: string;
    handleClick: (value: string) => void;
}

const MapLocationComponent = ({
    name,
    size,
    data,
    active,
    handleClick,
}: Props) => {
    const classSize = `left-[${size.left}] top-[${size.top}] w-[${size.width}] h-[${size.height}]`;
    return (
        <div
            onClick={() => handleClick(name)}
            data-note={name}
            className={`${
                active === name
                    ? 'opacity-100 animate-pulse border-double bg-white'
                    : 'opacity-100'
            } ${classSize} absolute rounded-lg hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
        >
            <img
                src={getCountIcon(data[name] ? data[name].length : 0)}
                className='h-[60%] w-auto'
            />
            <span
                className={`absolute inline-flex h-[100%] w-[100%] opacity-0 rounded-lg bg-gray-200 hover:animate-ping hover:opacity-100`}
            />
        </div>
    );
};

export default MapLocationComponent;
