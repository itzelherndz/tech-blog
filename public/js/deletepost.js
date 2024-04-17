const deleteForm = async (event) => {
    event.preventDefault();

    const apiResponse = await fetch ('/api/posts/', {
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

