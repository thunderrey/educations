let numberOfFilms = +prompt("Скільки фільмів Ви вже подивилися?", 0);
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
let firstFilm = prompt("Який останній фільм?", ""),
	firstFilmVote = prompt("Яка Ваша оцінка?", ""),
	secondFilm = prompt("Який останній фільм?", ""),
	secondFilmVote = prompt("Яка Ваша оцінка?", "");
personalMovieDB.movies[firstFilm] = firstFilmVote;
personalMovieDB.movies[secondFilm] = secondFilmVote;
console.log(personalMovieDB);