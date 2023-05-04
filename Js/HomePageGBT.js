fetch('http://localhost:8080/hej')
.then(response => response.json())
    .then(data => {
        const dataElement = document.getElementById('post');
        dataElement.textContent = post;

    })
.catch(error => console.error(error))