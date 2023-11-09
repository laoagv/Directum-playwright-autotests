import { test, Browser ,Page, expect, chromium, BrowserContext} from '@playwright/test';
import {Tester} from "./framework"
test("check Reference", async({})=>{
    const tester = new Tester;
    await tester.openBrowser("ru-RU")
    await tester.openPage("http://localhost/Client")
    await tester.logIn("test","11111")
    await tester.checkReference()
})