/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

//{"threads":[{"position":657,"start":0,"end":656,"connection":"closed"},{"position":657,"start":657,"end":1312,"connection":"open"}],"url":"https://att-b.udemycdn.com/2020-04-08_10-29-12-88262a17cf44d2f9dba4754228898c98/original.js?secure=ZjEYnMOR0aIrAzPQ5YINoQ%3D%3D%2C1595842606&filename=script.js","method":"GET","port":443,"downloadSize":1312,"headers":{"date":"Mon, 27 Jul 2020 05:14:50 GMT","content-type":"text/javascript","content-length":"1312","connection":"close","x-amz-id-2":"PM5UK7Lxx2KjmQqgxd1VytdLySivHI3jZY//ia9QEu7yCEojZx9o4SjwduGUkkUTPOCPLlCUWvc=","x-amz-request-id":"9B4E678EBC028D6C","last-modified":"Wed, 08 Apr 2020 10:29:13 GMT","etag":"\"215d4954526b7e186901653884773ae1\"","x-amz-meta-qqfilename":"script.js","x-amz-version-id":"mPP.9UfhN9cuQhUJTyMlTgk6KSP8Wo.6","x-edge-ip":"185.152.65.83","x-edge-location":"pragueCZ","x-cache":"HIT","x-age":"43527","server":"CDN77-Turbo","cache-control":"max-age=31536000","content-disposition":"attachment; filename=\"script.js\"","x-lb-ip":"185.59.220.1","x-lb-pop":"frankfurtDE","x-cache-lb":"HIT","x-age-lb":"237571","accept-ranges":"bytes"}}


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 'Введите количество фильмов')
document.write(`я посмотрел(а) уже ${numberOfFilms} фильма.`);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastFilm= prompt("Один из последних просмотренных фильмов?", "введите название фильма"),
    markOfFilm= +prompt("На сколько оцените его?", "от 0 до 10"),
    lastFilm2= prompt("Один из последних просмотренных фильмов?", "введите название фильма"),
    markOfFilm2= +prompt("На сколько оцените его?", "от 0 до 10");


document.write(`<br \/> Последний просмотренный фильм - ${lastFilm}.`);
document.write(`<br \/> Оценка фильма: ${markOfFilm}.`);

personalMovieDB.movies[lastFilm] = markOfFilm;
personalMovieDB.movies[markOfFilm] = lastFilm;

console.log(personalMovieDB);