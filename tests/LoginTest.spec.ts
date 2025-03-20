import dotenv from "dotenv";
dotenv.config();
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Test", () => {
    test("User can log in successfully", async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login();
        await loginPage.isLoggedIn();
    });
});
