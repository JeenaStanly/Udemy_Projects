const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const data = await res.json()
    console.log(data);
    const users = data.results
    console.log(users);
    //Clear Result block

    result.innerHTML = ''

    //Making contents in a webpage through js
    users.forEach(user => {
        console.log(user);
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first}${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `
        result.appendChild(li)
    });


}
getData()

//Adding event listentner to search bar and matching the search term with user's name and location

filter.addEventListener('input', (e) => filterData(e.target.value))

function filterData(searchTerm) {
    console.log(searchTerm);
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        }
        else {
            item.classList.add('hide')
        }
    })

}