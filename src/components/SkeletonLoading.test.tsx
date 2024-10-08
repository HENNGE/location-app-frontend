import { MantineProvider } from '@mantine/core';
import { render } from '@testing-library/react';
import { DepartmentSearchSkeleton } from './SkeletonLoading';

describe('DepartmentSearchSkeleton', () => {
    test('renders all skeleton correctly', () => {
        render(
            <MantineProvider>
                <DepartmentSearchSkeleton />
            </MantineProvider>
        );

        const elements = document.querySelectorAll('.mantine-Skeleton-root');

        expect(elements).toHaveLength(4);
    });
});
