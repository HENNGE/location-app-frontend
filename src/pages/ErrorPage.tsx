import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex h-[50vh] items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold text-red-600'>Oops!</h1>
                <p className='mt-4 text-2xl font-semibold text-gray-700'>
                    Something went wrong.
                </p>
                <p className='mt-2 text-gray-500'>
                    We encountered an unexpected error. Please try again later.
                </p>
                <Link
                    to='/'
                    className='mt-6 inline-block rounded bg-[#003366] px-8 py-3 text-lg font-medium text-white'
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
