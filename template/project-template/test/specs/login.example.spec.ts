import LoginPage from '@/page_objects/example-login-page';

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
   await LoginPage.open('/login');

   await LoginPage.loginWithCredentials('tomsmith', 'SuperSecretPassword!');
  });
})
