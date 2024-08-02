import EleventhFloorMap from '../assets/11F-map.png';

const EleventhFloorPage = (): JSX.Element => {
    return (
        <div className='flex justify-center items-center'>
            <img
                src={EleventhFloorMap}
                draggable='false'
                className='block relative h-[80%] w-[75%]'
            />
            <section className='absolute h-full w-full'></section>
        </div>
    );
};

export default EleventhFloorPage;
