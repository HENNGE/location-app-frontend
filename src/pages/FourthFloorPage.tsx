import FourthFloorMap from '../assets/4F-map.png';

const FourthFloorPage = (): JSX.Element => {
    return (
        <div className='flex justify-center items-center'>
            <img
                src={FourthFloorMap}
                draggable='false'
                className='block relative h-[80%] w-[90%]'
            />
            <section className='absolute h-full w-full'>
                <section id='inner-lounge'>
                    <div
                        data-note='wifi-ap-1'
                        className='absolute bg-red-500 rounded opacity-50 left-[47%] top-[41%] w-[13%] h-[17%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                    <div
                        data-note='wifi-ap-2'
                        className='absolute bg-green-800 rounded opacity-50 left-[60.5%] top-[41%] w-[13%] h-[17%] hover:opacity-90 hover:scale-100 transition-all  flex justify-center items-center [&>span]:hover:animate-none [&>span]:hover:opacity-0'
                    >
                        <span className='animate-ping absolute inline-flex h-[50%] w-[50%] rounded bg-white opacity-10' />
                    </div>
                    <div
                        data-note='wifi-ap-3'
                        className='absolute bg-blue-800 rounded opacity-50 left-[74%] top-[41%] w-[13%] h-[17%] hover:opacity-90 hover:scale-100 transition-all  flex justify-center items-center [&>span]:hover:animate-none [&>span]:hover:opacity-0'
                    >
                        {/* <span className='animate-ping absolute inline-flex h-[50%] w-[50%] rounded bg-white opacity-10' /> */}
                    </div>
                    <div
                        data-note='wifi-ap-1'
                        className='absolute bg-red-500 rounded opacity-50 left-[47%] top-[59%] w-[13%] h-[15.3%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                    <div
                        data-note='wifi-ap-2'
                        className='absolute bg-green-800 rounded opacity-50 left-[60.5%] top-[59%] w-[13%] h-[15.3%] hover:opacity-90 hover:scale-100 transition-all  flex justify-center items-center [&>span]:hover:animate-none [&>span]:hover:opacity-0'
                    >
                        {/* <span className='animate-ping absolute inline-flex h-[50%] w-[50%] rounded bg-white opacity-10' /> */}
                    </div>
                    <div
                        data-note='wifi-ap-3'
                        className='absolute bg-blue-800 rounded opacity-50 left-[74%] top-[59%] w-[13%] h-[15.3%] hover:opacity-90 hover:scale-100 transition-all  flex justify-center items-center [&>span]:hover:animate-none [&>span]:hover:opacity-0'
                    >
                        {/* <span className='animate-ping absolute inline-flex h-[50%] w-[50%] rounded bg-white opacity-10' /> */}
                    </div>
                    <div
                        data-note='lab-wifi-ap'
                        className='absolute bg-blue-800 rounded opacity-50 left-[65%] top-[77.1%] w-[14.9%] h-[10.2%] hover:opacity-90 hover:scale-100 transition-all  flex justify-center items-center [&>span]:hover:animate-none [&>span]:hover:opacity-0'
                    >
                        {/* <span className='animate-ping absolute inline-flex h-[50%] w-[50%] rounded bg-white opacity-10' /> */}
                    </div>
                </section>
                <section id='forest-area'>
                    <div
                        data-note='forest-wifi-ap-1'
                        className='absolute bg-red-500 rounded opacity-50 left-[10.5%] top-[22%] w-[8.6%] h-[17.7%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                    <div
                        data-note='forest-wifi-ap-2'
                        className='absolute bg-red-500 rounded opacity-50 left-[20.9%] top-[22%] w-[8.6%] h-[17.7%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                    <div
                        data-note='forest-wifi-ap-3'
                        className='absolute bg-red-500 rounded opacity-50 left-[31.2%] top-[22%] w-[8.6%] h-[17.7%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                    <div
                        data-note='forest-wifi-ap-4'
                        className='absolute bg-red-500 rounded opacity-50 left-[10.5%] top-[43%] w-[8.6%] h-[17.7%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                    <div
                        data-note='forest-wifi-ap-5'
                        className='absolute bg-red-500 rounded opacity-50 left-[20.9%] top-[43%] w-[8.6%] h-[17.7%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                    <div
                        data-note='forest-wifi-ap-6'
                        className='absolute bg-red-500 rounded opacity-50 left-[31.2%] top-[43%] w-[8.6%] h-[17.7%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                    <div
                        data-note='forest-wifi-ap-7'
                        className='absolute bg-red-500 rounded opacity-50 left-[10.5%] top-[64%] w-[8.6%] h-[17.7%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                    <div
                        data-note='forest-wifi-ap-8'
                        className='absolute bg-red-500 rounded opacity-50 left-[20.9%] top-[64%] w-[8.6%] h-[17.7%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                    <div
                        data-note='forest-wifi-ap-9'
                        className='absolute bg-red-500 rounded opacity-50 left-[31.2%] top-[64%] w-[8.6%] h-[17.7%] hover:opacity-90 hover:scale-100 transition-all flex justify-center items-center [&>span]:hover:animate-ping [&>span]:hover:opacity-100'
                    >
                        <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-red-400 opacity-0' />
                    </div>
                </section>
            </section>
        </div>
    );
};

export default FourthFloorPage;
