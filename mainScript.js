document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');
    const loginFormContainer = document.getElementById('login-form-container');
    const submitLoginButton = document.getElementById('submit-login');
  
    loginButton.addEventListener('click', function () {
      loginFormContainer.style.display = loginFormContainer.style.display === 'none' ? 'block' : 'none';
    });
  
    submitLoginButton.addEventListener('click', function (event) {
      event.preventDefault();
      // Add your login validation and authentication code here
      console.log('Logging in...');
    });
  });
  