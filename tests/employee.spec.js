const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Se connecter d'abord
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Remplir le formulaire de login
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  // Attendre la redirection
});

test('add new employee', async ({ page }) => {
  // Naviguer vers la section PIM
  await page.click('a[href="/web/index.php/pim/viewPimModule"]');
  // Cliquer sur "Add Employee"
  await page.click('button[type="button"]:has-text("Add")');

  await expect((await page.getByRole('navigation')).getByText('Add Employee')).toBeVisible();
  // Remplir le formulaire avec des informations factices
  await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name= "middleName"]', 'M');
  //await page.fill('input[name="employee Id"]', '12345');
  // Sauvegarder et vérifier que l'employé a été ajouté
    await page.click('button[type="submit"]');
});