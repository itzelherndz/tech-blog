const commentForm = async (event) =>{
    event.preventDefault();

    const comment = document.getElementById('new-comment').value;

    const apiResponse = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({content: comment}),
        headers: {'Content-Type' : 'application/json'},
    });

    if (apiResponse.ok) {
        alert('Success! Comment Submitted.');
        window.location.reload();
    } else {
        alert('Comment failed. Please try again.');
    }
}

document.getElementById('new-comment-submit').addEventListener('click', commentForm);