const OMDB_KEY = "5f1ade6e";

/* trending movie list */

const trendingMovies = [
"Avatar",
"Avengers",
"Spider-Man",
"Interstellar",
"Inception",
"Joker",
"pk",
"Titanic",
"Batman",
"Gladiator",
"Avatar The Way of Water"
];

/* load trending movies */

async function loadTrending(){

let container = document.getElementById("trending");

if(!container) return;

for(let movie of trendingMovies){

let res = await fetch(
`https://www.omdbapi.com/?t=${movie}&apikey=${OMDB_KEY}`
);

let data = await res.json();

container.innerHTML += `

<a href="movie.html?title=${data.Title}">

<div class="movie">

<img src="${data.Poster}">

<p>${data.Title}</p>

</div>

</a>

`;

}

}

/* slider buttons */

function scrollLeft(){

document.getElementById("trending")
.scrollBy({left:-300,behavior:"smooth"});

}

function scrollRight(){

document.getElementById("trending")
.scrollBy({left:300,behavior:"smooth"});

}

/* movie search */

async function searchMovie(){

let movie = document.getElementById("movieName").value;

if(movie==="") return;

let res = await fetch(
`https://www.omdbapi.com/?t=${movie}&apikey=${OMDB_KEY}`
);

let data = await res.json();

if(data.Response==="False"){

document.getElementById("result").innerHTML =
"<h3>Movie not found</h3>";

return;

}

document.getElementById("result").innerHTML = `

<div class="movie-card">

<h2>${data.Title}</h2>

<img src="${data.Poster}">

<p><b>Year:</b> ${data.Year}</p>

<p><b>Genre:</b> ${data.Genre}</p>

<p><b>IMDb Rating:</b> ⭐ ${data.imdbRating}</p>

<p>${data.Plot}</p>

</div>

`;

}

/* page load */

window.onload = loadTrending;