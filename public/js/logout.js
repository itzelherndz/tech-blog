const logoutForm = async (event) => {
    event.preventDefault();

    const apiResponse = await fetch ('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
    });

    if (apiResponse.ok) {
        window.location.assign('/');
        alert('Success! Logged out.');
    } else {
        alert('Failed to log out.');
    }
};

document.getElementById('logout').addEventListener('click', logoutForm);