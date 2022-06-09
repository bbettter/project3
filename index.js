let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start () {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films did you watch?", "");
    }
}

function rememberMyFilms () {
    let a = prompt("Один из последних просмотренных фильмов ?", "")
    let b = prompt("На сколько оцените его ?", "")
    for (i = 0; i < 2; i++){
        if (a != null || b != null || a.length < 50 || a != '' || b != '') {
            personalMovieDB.movies[a] = b;
        } else {
            i--
            console.log('Error');
        }
    }
}

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}



function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

function writeYourGenres () {
    for (i = 1; i <= 3; i++){
       personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "")
    }
    
}

start()
rememberMyFilms()
detectPersonalLevel()
showMyDB(personalMovieDB.privat)
writeYourGenres ()