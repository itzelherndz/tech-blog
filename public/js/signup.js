const signupForm = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email-signup').value.trim();
    const username = document.getElementById('username-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    const apiResponse = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({email: email, username: username, password: password}),
        headers: { 'Content-Type': 'application/json' },
    });

    if (apiResponse.ok) {
        alert('Success! Signed up.');
        window.location.assign('/');
    } else {
        alert('Signup failed. Please try again.');
    }
};

document.getElementById('signup-btn').addEventListener('click', signupForm);