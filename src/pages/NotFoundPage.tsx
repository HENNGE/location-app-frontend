import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='flex h-[50vh] items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-7xl font-bold text-gray-800'>404</h1>
                <p className='mt-4 text-2xl font-semibold text-gray-600'>
                    Page Not Found
                </p>
                <p className='mt-2 text-gray-500'>
                    The page you're looking for doesn't exist or has been moved.
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

export default NotFoundPage;
