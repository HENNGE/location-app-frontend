import ImageMapper, { Map } from 'react-img-mapper';
import SecondFloorMap from '../assets/2F-map.png';

const SecondFloorPage = (): JSX.Element => {
    const MAP: Map = {
        name: 'my-map',
        areas: [
            {
                id: '75449960-7fde-4907-a463-7bb5b146d70c',
                shape: 'poly',
                fillColor: '#ff000026',
                strokeColor: 'black',
                coords: [
                    19.567164179104466, 52.73631840796019, 19.567164179104466,
                    1.990049751243781, 637.9751243781094, 1.4925373134328357,
                    638.9701492537313, 28.358208955223876, 464.8407960199004,
                    138.8059701492537, 131.50746268656715, 130.34825870646765,
                ],
                disabled: false,
            },
        ],
    };
    return (
        <div className='flex justify-center items-center'>
            <ImageMapper src={SecondFloorMap} map={MAP} />
        </div>
    );
};

export default SecondFloorPage;
