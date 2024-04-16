const postForm = async (event) => {
    event.preventDefault();

    const title = document.getElementById('new-post-title').value.trim();
    const content = document.getElementById('new-post-content').value;

    const apiResponse = await fetch ('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({title: title, content: content}),
        headers: { 'Content-Type': 'application/json' },
    });

    if (apiResponse.ok) {
        alert('Post Published!');
        window.location.reload();
    } else {
        alert('Post failed. Please try again');
    }
}

document.getElementById('new-post-submit').addEventListener('click', postForm);