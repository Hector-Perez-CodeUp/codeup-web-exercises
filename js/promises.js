// Handle An API Promise
function getLatestCommit() {
    let repo;
    let post;
    fetch('https://api.github.com/users', {headers: {'Authorization': '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'}})
        .then(response => {return response.json()})
        .then(user => {
            repo = user[0].repos_url
            fetch(repo, {headers: {'Authorization': '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'}})
                .then(response => {return response.json()})
                .then(response => {
                    post = response[0].commits_url.split("{")[0]
                    fetch(post, {headers: {'Authorization': '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'}})
                        .then(response => {return response.json()})
                        .then(response => {return response[0].commit.author.date.split("T")[0]})
                });
        })
}

getLatestCommit()


// Create Your Own Promise
function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, num);
        setTimeout(reject, num);
    })
}
wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));


// Random Dog Image
fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => {
    let pic = document.createElement('img');
    let div = document.createElement('div');
    pic.src = data.message
    div.append(pic);
    document.body.append(pic);
})


// Post Request
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));


// Delete Request
fetch('https://jsonplaceholder.typicode.com/posts/101', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => console.log(res.status));