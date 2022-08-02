'use strict';
/* 


3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

let numberOfFilms = +prompt('Скільки фільмів переглянули?', 0),
	lastFilm,
	lastFilmVote;

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
for (let i = 0; i < numberOfFilms; i++) {
	lastFilm = prompt('Який остінній фільм переглядали', '');
	lastFilmVote = +prompt('Наскільки оціните цей фільм?', 0);
	personalMovieDB.movies[lastFilm] = lastFilmVote;
}

console.log(personalMovieDB);
