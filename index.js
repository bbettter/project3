let numberOfFilms = +prompt("How many films did you watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (i = 0; i < 2; i++){
    let a = prompt("Один из последних просмотренных фильмов ?", "")
    let b = prompt("На сколько оцените его ?", "")
    if (a == null || b == null || a.length > 50 || b.length > 50 || a == '' || b == '') {
        i--
    } else {
        personalMovieDB.movies[a] = b;
    }
    
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count <= 30 || personalMovieDB.count == 10) {
    console.log('Вы классический зритель')
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}