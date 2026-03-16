const OMDB_KEY = "5f1ade6e";

const params = new URLSearchParams(window.location.search);

const title = params.get("title");

async function loadMovie(){

let res = await fetch(
`https://www.omdbapi.com/?t=${title}&apikey=${OMDB_KEY}`
);

let data = await res.json();

document.getElementById("movie").innerHTML = `

<h2>${data.Title}</h2>

<img src="${data.Poster}" width="250">

<p><b>Year:</b> ${data.Year}</p>

<p><b>Genre:</b> ${data.Genre}</p>

<p><b>Actors:</b> ${data.Actors}</p>

<p><b>IMDb Rating:</b> ⭐ ${data.imdbRating}</p>

<p><b>Plot:</b> ${data.Plot}</p>

`;

}

loadMovie();