import test, { expect } from '@playwright/test';
import {
    mockCasvalUserLocation,
    mockFetchedCasvalData,
    mockMembers,
} from '../test/mockData';

test.describe('search', () => {
    const mockMember = mockMembers[0];

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');

        await page.route('**', async (route) => {
            const request = route.request();
            const postData = request.postData();

            if (request.method() === 'POST' && postData) {
                const body = JSON.parse(postData);

                if (body.query && body.query.includes('member(name: ')) {
                    await route.fulfill({
                        status: 200,
                        contentType: 'application/json',
                        body: JSON.stringify({
                            data: { member: [mockMember] },
                        }),
                    });
                } else if (body.email && body.client_id && body.client_secret) {
                    await route.fulfill({
                        status: 200,
                        contentType: 'application/json',
                        body: JSON.stringify(mockCasvalUserLocation),
                    });
                } else if (
                    body.client_id &&
                    body.client_secret &&
                    !body.email
                ) {
                    await route.fulfill({
                        status: 200,
                        contentType: 'application/json',
                        body: JSON.stringify(mockFetchedCasvalData),
                    });
                } else {
                    await route.continue();
                }
            } else {
                await route.continue();
            }
        });
    });

    test('search and redirect to where user is located', async ({ page }) => {
        const searchBox = page.getByRole('textbox', { name: /search box/i });

        await expect(searchBox).toBeVisible();

        await searchBox.fill(mockMember.name as string);

        await page.getByText(mockMember.name as string).click();

        await expect(page.getByRole('dialog')).toBeVisible();

        await page.getByRole('button', { name: /Go to user on map/i }).click();

        expect(page.url()).toMatch(`level-4/${mockMember.email}`);
    });
});
