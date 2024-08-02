import SecondFloorMap from '../assets/2F-map.png';

const SecondFloorPage = (): JSX.Element => {
    return (
        <div className='flex justify-center items-center'>
            <img
                src={SecondFloorMap}
                draggable='false'
                className='block relative h-auto w-[80%]'
            />
            <section className='absolute h-full w-full'></section>
        </div>
    );
};

export default SecondFloorPage;
