import { Loader } from '@mantine/core';

interface Props {
    message?: string;
}

const LoadingComponent = ({ message }: Props) => {
    return (
        <div className='flex justify-center items-center flex-col space-y-2'>
            <Loader color='#003366' />
            <div>{message}</div>
        </div>
    );
};

export default LoadingComponent;
