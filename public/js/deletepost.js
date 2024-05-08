const deleteForm = async (event) => {
    event.preventDefault();

    const postId = window.location.pathname.split('/').pop();

    const apiResponse = await fetch (`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    if (apiResponse.ok) {
        alert('Post Deleted!');
        window.location.assign('/');
    } else {
        alert('Post delete failed. Please try again');
    }
}

document.getElementById('delete-button').addEventListener('click', deleteForm);

