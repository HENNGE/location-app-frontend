interface Props {
    name: string;
    left: number;
    top: number;
    width: number;
    height: number;
}

const WifiHoverComponent = ({ name, left, top, width, height }: Props) => {
    return (
        <div
            data-note={name}
            className={`absolute bg-white rounded opacity-0 left-[${left}%] top-[${top}%] w-[${width}%] h-[${height}%] hover:opacity-80 hover:scale-100 transition-all flex justify-center items-center`}
        >
            <span className='animate-none absolute inline-flex h-[50%] w-[50%] rounded bg-gray-200 opacity-0 hover:animate-ping hover:opacity-100' />
        </div>
    );
};

export default WifiHoverComponent;
