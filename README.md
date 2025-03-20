# playwright-login
## Playwright Login Automation

This project automates the login process for a web application https://opensource-demo.orangehrmlive.com/web/index.php/auth/login using Playwright with TypeScript. It follows the Page Object Model (POM) for better maintainability and stores credentials securely using environment variables.
Project Features

* Automated login test using Playwright
* Page Object Model (POM) for maintainability
* Secure credential management using .env
* HTML test report generation


## 1 - Prerequisites

Ensure you have the following installed:

    Node.js (Download: https://nodejs.org/)
    Git (Download: https://git-scm.com/)
    VS Code (Recommended)

## 2 -  Clone the Repository

Open a terminal and run:

git clone <repository-url>
cd playwright-login-automation

## 3 -  Install Dependencies

Run the following command to install required dependencies:

npm install

## 4 -  Configure Environment Variables

For security reasons, credentials are stored in an .env file.

    Create a .env file in the root directory:

cp .env.example .env

Update your .env file with login credentials:

    USERNAME=your-username
    PASSWORD=your-password
    BASE_URL=https://example.com

    Make sure .env is ignored in Git (already added in .gitignore).

## 5 - Run Tests
To run all tests:

npx playwright test

To run tests in headed mode (visible browser):

npx playwright test --headed

To debug tests:

npx playwright test --debug

## 6 -  Generate and View Test Reports

To generate an HTML test report:

npx playwright test --reporter=html

To view the report, open:

playwright-report/index.html

## 7 - Project Structure

![image](https://github.com/user-attachments/assets/89cf8ab8-363c-4c1c-b84e-da903c2d6b17)

## 8 Execution of test recording



https://github.com/user-attachments/assets/9201dbaa-42cf-4609-a46a-a318ebd9c847



## 9 - Troubleshooting

1. Playwright not found?
Run:

npx playwright install
npx playwright install-deps

2. Missing environment variables?
Ensure .env file is created and updated.
