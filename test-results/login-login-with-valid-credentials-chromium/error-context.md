# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> login with valid credentials
- Location: tests\login.spec.js:3:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\.\/auth\/login/
Received string:  "https://opensource-demo.orangehrmlive.com/auth/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/auth/login"

```

```yaml
- heading "Not Found" [level=1]
- paragraph: The requested URL was not found on this server.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('login with valid credentials', async ({ page }) => {
  4  |   await page.goto('/auth/login');
> 5  |   await expect(page).toHaveURL(/\.\/auth\/login/); // Vérifier que nous sommes sur la page de login
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  6  |   // Remplir le formulaire de login avec les identifiants fournis
  7  | await page.fill('input[name="username"]', 'Admin');
  8  | await page.fill('input[name="password"]', 'admin123');
  9  | await page.click('button[type="login"]');
  10 | 
  11 | await page.waitForNavigation(); // Attendre la redirection après le login
  12 | 
  13 |  // Vérifier que nous sommes redirigés vers le dashboard
  14 |  await expect(page).toHaveURL(/\.\/dashboard/);
  15 |  // Vérifier que la page redirige vers le dashboard
  16 |  await expect(page).toHaveTitle('OrangeHRM'); 
  17 |  // Vérifier que le titre de la page est correct
  18 |  // Vérifier la présence d'un élément confirmant la connexion
  19 | });
  20 | 
  21 | test('login with invalid credentials', async ({ page }) => {
  22 |   await page.goto('/auth/login');
  23 |   // Remplir le formulaire avec des identifiants incorrects
  24 |   // Vérifier qu'un message d'erreur s'affiche
  25 | });
```