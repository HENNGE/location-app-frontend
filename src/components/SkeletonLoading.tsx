import { Skeleton } from '@mantine/core';

export const DepartmentSearchSkeleton = () => {
    return (
        <div className='w-full p-4'>
            <Skeleton height={8} radius='xl' width='70%' />
            <Skeleton height={8} mt={6} radius='xl' width='80%' />
            <div className='flex w-full justify-between'>
                <Skeleton height={8} mt={6} radius='xl' width='50%' />
                <Skeleton height={30} mb='xl' width='15%' />
            </div>
        </div>
    );
};
