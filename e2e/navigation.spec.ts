import { expect, test } from '@playwright/test';

test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
    });

    test('has nav button', async ({ page }) => {
        await expect(
            page.getByRole('button', { name: /2F button/i }).first()
        ).toBeVisible();

        await expect(
            page.getByRole('button', { name: /4F button/i }).first()
        ).toBeVisible();

        await expect(
            page.getByRole('button', { name: /5F button/i }).first()
        ).toBeVisible();

        await expect(
            page.getByRole('button', { name: /11F button/i }).first()
        ).toBeVisible();
    });

    test('navigates to 11F correctly', async ({ page }) => {
        await page
            .getByRole('button', { name: /11F button/i })
            .first()
            .click();

        expect(page.url()).toMatch('level-11');
    });

    test('navigates to 5F correctly', async ({ page }) => {
        await page
            .getByRole('button', { name: /5F button/i })
            .first()
            .click();

        expect(page.url()).toMatch('level-5');
    });

    test('navigates to 4F correctly', async ({ page }) => {
        await page
            .getByRole('button', { name: /4F button/i })
            .first()
            .click();

        expect(page.url()).toMatch('level-4');
    });

    test('navigates to 2F correctly', async ({ page }) => {
        await page
            .getByRole('button', { name: /2F button/i })
            .first()
            .click();

        expect(page.url()).toMatch('level-2');
    });
});
