import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockCasvalUserLocation, mockMembers } from '../../test/mockData';
import IndividualSearchModal from './IndividualSearchModal';

describe('IndividualSearchModal', () => {
    const mockHandleClose = vi.fn();
    const mockLocationReplace = vi.fn();

    const originalLocation = window.location;

    beforeEach(() => {
        window.location = { ...originalLocation, replace: mockLocationReplace };
    });

    afterEach(() => {
        window.location = originalLocation;
    });

    test('click on action icon is handled correctly', async () => {
        render(
            <MantineProvider>
                <IndividualSearchModal
                    member={mockMembers[0]}
                    open={true}
                    handleClose={mockHandleClose}
                    casvalLocation={mockCasvalUserLocation}
                />
            </MantineProvider>
        );

        await userEvent.click(
            screen.getByRole('button', { name: /Go to user on map/i })
        );

        expect(mockLocationReplace).toHaveBeenCalledWith(
            `/level-${mockCasvalUserLocation.area_tags[2].name[0]}/${mockMembers[0].email}`
        );
    });
});
