import { test, Browser ,Page, expect, chromium} from '@playwright/test';
import { describe } from 'node:test';

const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

test('check spravka', async ({browser})=>{
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ locale: 'ru-RU' });
    const page = await context.newPage();
    await page.goto('http://localhost/Client')
    await page.locator("#languages_select").click()
    await page.locator("#context-menu-item-ru-RU").click()
    await page.locator("#login-user-id").fill("test")
    await page.locator("#login-password-id").fill("11111")
    await page.locator(".login__submit-button-cover").click()
    await page.locator("#current-user-info").click()
    await page.getByText("Сведения о системе" ).click()
    await page.getByTitle("Показать справку").click()
    await delay(5000)
  })

