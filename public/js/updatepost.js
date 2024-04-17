const updateForm = async (event) => {
    event.preventDefault();

    const title = document.getElementById('update-title').value.trim();
    const content = document.getElementById('update-content').value;

    const apiResponse = await fetch ('/api/posts/', {
        method: 'PUT',
        body: JSON.stringify({title: title, content: content}),
        headers: { 'Content-Type': 'application/json' },
    });

    if (apiResponse.ok) {
        alert('Post Updated!');
        window.location.reload();
    } else {
        alert('Post update failed. Please try again');
    }
}

document.getElementById('update-button').addEventListener('click', updateForm);

