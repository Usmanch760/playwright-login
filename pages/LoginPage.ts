import { Page, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export class LoginPage {
    private page: Page;
    private username: string ;
    private password: string; 
    private baseUrl: string ;
    constructor(page: Page) {
        this.page = page;
        this.username =  process.env.USER_NAME || "";
        this.password = process.env.PASSWORD || "";
        this.baseUrl = process.env.BASE_URL || "https://opensource-demo.orangehrmlive.com/";

    }

    async navigate() {
        console.log("Navigating to login page...");
        await this.page.goto(this.baseUrl + "/web/index.php/auth/login");
        
    }

    async login() {
        console.log("Attempting login...");
        await this.page.getByPlaceholder("Username").fill(this.username);
        await this.page.getByPlaceholder("Password").fill(this.password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async isLoggedIn() {
        console.log("Verifying successful login...");  
        const dashboardHeader = this.page.locator("//h6[normalize-space()='Dashboard']");
        await expect(dashboardHeader).toBeVisible({ timeout: 5000 });
    }
}
