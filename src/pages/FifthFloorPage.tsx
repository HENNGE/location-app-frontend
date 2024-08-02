import FifthFloorMap from '../assets/5F-map.png';

const FourthFloorPage = (): JSX.Element => {
    return (
        <div className='flex justify-center items-center'>
            <img
                src={FifthFloorMap}
                draggable='false'
                className='block relative h-auto w-[75%]'
            />
            <section className='absolute h-full w-full'></section>
        </div>
    );
};

export default FourthFloorPage;
