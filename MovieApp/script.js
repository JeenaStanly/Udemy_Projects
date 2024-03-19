const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=020c3ed68f1a513cc2f62845180fce8d&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=020c3ed68f1a513cc2f62845180fce8d&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
//Get initial movies

getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results);
}
function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie
        //by  declaring an object like this we can get all the properties without adding seperate specification like movie.title,movie.poster_path
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `        
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}pan>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${overview}
        </div>
    `

        main.appendChild(movieEl)
    });
}
function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    }
    else if (vote > 5) {
        return 'orange'
    }
    else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()//prevent it from submitting a form
    const searchTerm = search.value // enetering value in search tab
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)//adding Search api with searching keyword
        search.value = ''//clearing the search tab
    }
    else {
        window.location.reload()
    }
})

// Steps that followed in this script

/* 

1.Declared the constants for API ie;API_URL,SEARCH_API,IMG_PATH

2.Declared all the constants from the document ie; form,search,main

3.Declared a function called getMovies() where we passed the API_URL as the parameter
    3a.In this function we fetched the respose as const res = fetch(url)
    3b.Then this fethched data saved in json format, const data = res.json
    3c.Then we called showMovie() function by passing the parameter data.result , here rsult is the array which include all the datas we fetched
4.Declared a function called showMovie(movies),movies=data.result
    4a.We cleared  all the html elements in main tag using main.innerHTML = ''
    4b.Here we loop throgh the each movie in array named movies using forEach()
    4c.Declared an object movie with properties title,poster_path,vote_average,overview
    4d.Created an element 'div' using document.createElement('div') and saved to movieEl ,and added a class 'movie' into that div
    4e.Added html elements to that div using movieEl.innerHTML=`....`
    4f.Added that div element into main using main.appendChild(movieEl)
5.Declared a function called getClassByRate(vote) ,here vote=vote_average passed from the created object  
6.Added an eventListener 'submit' to form

*/
