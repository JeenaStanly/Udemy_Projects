const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
    try {
        const res = await axios.get(APIURL + username)
        /* .then(res => console.log(res.data))
    .catch(err => console.log(err)) */
        console.log(res.data);
        createUserCard(res.data)
        getRepos(username)
    }
    catch (err) {
        console.log(err);
        if (err.response.status == 404) {
            createErrorCard('No Profile with this Username')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios.get(APIURL + username + '/repos?sort=created')
        /* .then(res => console.log(res.data))
    .catch(err => console.log(err)) */
        console.log(data);
        addReposToCard(data)
    }
    catch (err) {
        console.log(err);
        if (err.response.status == 404) {
            createErrorCard('Problem fetching repos')
        }
    }
}

function createUserCard(user) {
    cardHTML = `
    <div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers}<strong>Followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos}<strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
    </div>


</div>
    `
    main.innerHTML = cardHTML
}

function createErrorCard(msg) {
    cardHTML = `
    <div class="card">
        <h1>${msg}</h1>
    </div>
    `
    main.innerHTML = cardHTML
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos')
    repos.slice(0, 5).forEach(repo => {
        const repoEl = document.createElement('a')
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url
        repoEl.target = '_blank'
        repoEl.innerText = repo.name

        reposEl.appendChild(repoEl)
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = search.value
    if (user) {
        getUser(user)
        search.value = ''
    }
})



// here we used api-url to get git hub username and repositories
//we used try and catch method to error handling
// we used a query in repos api '?sort=created'
//then used a .slice method to get only last 5 repositories from the sorted list