import FourthFloorMap from '../assets/4F-map.png';
import WifiHoverComponent from '../components/WifiHoverComponent';

const FourthFloorPage = (): JSX.Element => {
    const animationSpan = (
        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
    );

    return (
        <div className='flex justify-center items-center'>
            <img
                src={FourthFloorMap}
                draggable='false'
                className='block relative h-[80%] w-[90%]'
            />
            <section className='absolute h-full w-full border'>
                <section id='inner-lounge'>
                    <WifiHoverComponent
                        name='wifi-ap-1'
                        left={47}
                        top={41}
                        width={13}
                        height={17}
                    />
                    <WifiHoverComponent
                        name='wifi-ap-2'
                        left={60.5}
                        top={41}
                        width={13}
                        height={17}
                    />
                    <WifiHoverComponent
                        name='wifi-ap-3'
                        left={74}
                        top={41}
                        width={13}
                        height={17}
                    />
                    {/* <div
                        data-note='wifi-ap-1'
                        className='absolute bg-white rounded opacity-0 left-[47%] top-[41%] w-[13%] h-[17%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div> */}
                    {/* <div
                        data-note='wifi-ap-2'
                        className='absolute bg-white rounded opacity-0 left-[60.5%] top-[41%] w-[13%] h-[17%] hover:opacity-80 hover:scale-100 transition-all  flex justify-center items-center'
                    >
                        {animationSpan}
                    </div> */}
                    {/* <div
                        data-note='wifi-ap-3'
                        className='absolute bg-white rounded opacity-0 left-[74%] top-[41%] w-[13%] h-[17%] hover:opacity-80 hover:scale-100 transition-all  flex justify-center items-center'
                    >
                        {animationSpan}
                    </div> */}
                    <div
                        data-note='wifi-ap-1'
                        className='absolute bg-white rounded opacity-0 left-[47%] top-[59%] w-[13%] h-[15.3%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='wifi-ap-2'
                        className='absolute bg-white rounded opacity-0 left-[60.5%] top-[59%] w-[13%] h-[15.3%] hover:opacity-80 hover:scale-100 transition-all  flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='wifi-ap-3'
                        className='absolute bg-white rounded opacity-0 left-[74%] top-[59%] w-[13%] h-[15.3%] hover:opacity-80 hover:scale-100 transition-all  flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='lab-wifi-ap'
                        className='absolute bg-white rounded opacity-0 left-[65%] top-[77.1%] w-[16%] h-[10.7%] hover:opacity-80 hover:scale-100 transition-all  flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                </section>
                <section id='forest-area'>
                    <div
                        data-note='forest-wifi-ap-1'
                        className='absolute bg-white rounded opacity-0 left-[9.4%] top-[21%] w-[8.6%] h-[17.7%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='forest-wifi-ap-2'
                        className='absolute bg-white rounded opacity-0 left-[20%] top-[21%] w-[8.6%] h-[17.7%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='forest-wifi-ap-3'
                        className='absolute bg-white rounded opacity-0 left-[30.5%] top-[21%] w-[8.6%] h-[17.7%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='forest-wifi-ap-4'
                        className='absolute bg-white rounded opacity-0 left-[9.4%] top-[42.5%] w-[8.6%] h-[17.7%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='forest-wifi-ap-5'
                        className='absolute bg-white rounded opacity-0 left-[20%] top-[42.5%] w-[8.6%] h-[17.7%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='forest-wifi-ap-6'
                        className='absolute bg-white rounded opacity-0 left-[30.5%] top-[42.5%] w-[8.6%] h-[17.7%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='forest-wifi-ap-7'
                        className='absolute bg-white rounded opacity-0 left-[9.4%] top-[64%] w-[8.6%] h-[17.7%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='forest-wifi-ap-8'
                        className='absolute bg-white rounded opacity-0 left-[20%] top-[64%] w-[8.6%] h-[17.7%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                    <div
                        data-note='forest-wifi-ap-9'
                        className='absolute bg-white rounded opacity-0 left-[30.5%] top-[64%] w-[8.6%] h-[17.7%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center'
                    >
                        {animationSpan}
                    </div>
                </section>
            </section>
        </div>
    );
};

export default FourthFloorPage;
