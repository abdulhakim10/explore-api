function loadData2() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
}

function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    console.log(data);
}

function loadPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost())
}

function displayPost(data) {
    console.log(data);
}