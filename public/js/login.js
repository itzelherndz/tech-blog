const loginForm = async (event) => {
    event.preventDefault();

    const username = document.getElementById('username-login').value.trim();
    const password = document.getElementById('password-login').value.trim();
    
    const apiResponse = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({username: username, password: password}),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (apiResponse.ok) {
        alert('Success! Logged in.');
        window.location.assign('/');
      } else {
        alert('Login failed. Please try again.');
      }
};

document.getElementById('login-btn').addEventListener('click',loginForm);