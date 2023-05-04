
const urlGetPosts = 'http://localhost:8080/'
const tablePost = document.getElementById('post-list')

async function createPostTable(post) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${post.id}</td>
      <td>${post.title}</td>
      <td>${post.body}</td>
    `;

    cell = row.insertCell(4)
    let pbUpdate = document.createElement("button")
    pbUpdate.textContent = "Opdater"
    pbUpdate.className = "buttonupdate"
    pbUpdate.addEventListener('click', function () {
        const posid = post.postId
        printPost(posid, post)
    })
    cell.appendChild(pbUpdate)
    tablePost.appendChild(row);
}

let lstPosts = []
async function actionFetchPosts() {
    lstPosts = await fetchAny(urlGetPosts);
    tablePost.innerHTML = '';
    lstPosts.forEach(createPostTable)
}

function printPost(posid, post) {
    console.log(posid)
    console.log(post)
}