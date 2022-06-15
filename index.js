const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start () {
        let numberOfFilms = +prompt("How many films did you watch?", "");

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("How many films did you watch?", "");
        }
        this.count = numberOfFilms
    },
    rememberMyFilms () {
        
        for (i = 0; i < 2; i++){
            let a = prompt("Один из последних просмотренных фильмов ?", "")
            let b = prompt("На сколько оцените его ?", "")

            if (a != null || b != null || a.length < 50 || a != '' || b != '') {
                personalMovieDB.movies[a] = b;
            } else {
                i--
                console.log('Error');
            }
        }
    },
    detectPersonalLevel () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель')
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB () {
        console.log(personalMovieDB) 
    },
    writeYourGenres () {
        for (i = 1; i <= 3; i++){
            let a = prompt(`Ваш любимый жанр под номером ${i}`, "")
                if (a != null && a != ''){
                    personalMovieDB.genres[i - 1] = a
                } else {
                    i--
                }
           
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        })
    },

    toggleVisibleMyDB () {
        if(personalMovieDB.privat){
            personalMovieDB.showMyDB()
            personalMovieDB.privat = false
        }
    }
};


// personalMovieDB.toggleVisibleMyDB ()
// personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
// personalMovieDB.detectPersonalLevel()
// personalMovieDB.showMyDB(personalMovieDB.privat)
// personalMovieDB.writeYourGenres ()