import { test, Browser ,Page, expect, chromium, BrowserContext} from '@playwright/test';
import { time } from 'console';
export class Tester{
    /**
     * async openBrowser
     */
    private  delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

    private browser:Browser;
    private context:BrowserContext;
    private currentPage:Page;
    public  async openBrowser(localization:string = "ru-RU") {
        this.browser =await chromium.launch({headless: false})
        this.context = await this.browser.newContext({locale:localization})
    }
    public async openPage(link: string ){
        this.currentPage = await this.context.newPage();
        this.currentPage.goto(link);
    }
    public async logIn(login:string, password:string){
        await this.currentPage.locator("#languages_select").click()
        await this.currentPage.locator("#context-menu-item-ru-RU").click()
        await this.currentPage.locator("#login-user-id").fill(login)
        await this.currentPage.locator("#login-password-id").fill(password)
        await this.currentPage.locator(".login__submit-button-cover").click()
    }
    public async checkReference(){

        await this.currentPage.locator("#current-user-info").click()
        await this.currentPage.getByText("Сведения о системе" ).click()
        await this.currentPage.getByTitle("Показать справку").click()
        await this.delay(5000)
    }
}