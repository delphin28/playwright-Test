const { test, expect } = require('@playwright/test');

test('login with valid credentials', async ({ page }) => {
  await page.goto('/auth/login');
  await expect(page).toHaveURL(/\.\/auth\/login/); // Vérifier que nous sommes sur la page de login
  // Remplir le formulaire de login avec les identifiants fournis
await page.fill('input[name="username"]', 'Admin');
await page.fill('input[name="password"]', 'admin123');
await page.click('button[type="login"]');

await page.waitForNavigation(); // Attendre la redirection après le login

 // Vérifier que nous sommes redirigés vers le dashboard
 await expect(page).toHaveURL(/\.\/dashboard/);
 // Vérifier que la page redirige vers le dashboard
 await expect(page).toHaveTitle('OrangeHRM'); 
 // Vérifier que le titre de la page est correct
 // Vérifier la présence d'un élément confirmant la connexion
});

test('login with invalid credentials', async ({ page }) => {
  await page.goto('/auth/login');
  // Remplir le formulaire avec des identifiants incorrects
  // Vérifier qu'un message d'erreur s'affiche
});