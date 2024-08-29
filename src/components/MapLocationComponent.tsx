import { FetchedCasvalData } from '../types/casval.types';
import { getCountIcon } from '../utilities/utilities';

interface Props {
    name: string;
    size: {
        left: string;
        top: string;
        width: string;
        height: string;
    };
    data: FetchedCasvalData[];
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
    const [filteredData] = data.filter(
        (fetchedData) => fetchedData.areaTag.name === name
    );

    return (
        <div
            onClick={() => handleClick(name)}
            data-note={name}
            style={{
                left: size.left,
                top: size.top,
                width: size.width,
                height: size.height,
            }}
            className={`${
                active === name
                    ? 'opacity-100 border-[3px] border-white animate-pulse'
                    : 'opacity-100'
            } absolute rounded-lghover:scale-95 transition-all flex justify-center items-center hover:border-[3px] hover:border-white hover:animate-pulse cursor-pointer`}
        >
            <img
                src={getCountIcon(filteredData ? filteredData.users.length : 0)}
                className='h-[5rem] w-auto'
            />
        </div>
    );
};

export default MapLocationComponent;
