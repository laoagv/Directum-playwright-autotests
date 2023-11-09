import { test, Browser ,Page, expect, chromium} from '@playwright/test';
import { describe } from 'node:test';
describe("open browser", async ()=>{
    let browser : Browser;
    let page : Page;
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
})