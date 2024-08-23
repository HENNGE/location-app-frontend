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
                    ? 'opacity-100 border-[3px] border-white animate-pulse'
                    : 'opacity-100'
            } ${classSize} absolute rounded-lg hover:scale-95 transition-all flex justify-center items-center hover:border-[3px] hover:border-white hover:animate-pulse cursor-pointer`}
        >
            <img
                src={getCountIcon(data[name] ? data[name].length : 0)}
                className='h-[60%] w-auto'
            />
        </div>
    );
};

export default MapLocationComponent;
