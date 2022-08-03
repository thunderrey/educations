/* let numberOfFilms = +prompt("Скільки фільмів Ви вже подивилися?", 0);
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
console.log(personalMovieDB); */

// Место для первой задачи
function sayHello(name) {
	return "Привет" + name;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
	let arr = [num - 1, num, num + 1];
	return arr;
}

// Место для третьей задачи
function getMathResult(num, count) {
	if(typeof(count) !== "number" || count <= 0){return num;}
	let str = "";
	for(let i = 1; i <= count; i++){
		if(i !== count){
			str += num * i + "---";
		}else{
			str += num * i;
		}
	}
	return str;
}