const movies = [
    { title: "Inception", rating: 8.8, genre: "Sci-Fi" },
    { title: "Titanic", rating: 7.8, genre: "Drama" },
    { title: "The Godfather", rating: 9.2, genre: "Crime" },
    { title: "The Dark Knight", rating: 9.0, genre: "Action" },
    { title: "Forrest Gump", rating: 8.8, genre: "Comedy" }
  ];

  
// Usando filter, crea un array de películas con calificación superior a 8.5.
const uppperRatingMovies = movies.filter(movie => movie.rating > 8.5);
console.log(uppperRatingMovies);

// Usando map, crea un array de strings con los títulos de las películas seguidos de su género en paréntesis (por ejemplo, "Inception (Sci-Fi)").
const titleAndGenre = movies.map(movie => (
    `${movie.title} (${movie.genre})`
));
console.log(titleAndGenre);

// Usando reduce, agrupa las películas por género en un objeto.
const groupedMovies = movies.reduce((result, movie) => {
    const genre = movie.genre;
    if (!result[genre]) {
      result[genre] = [];
    }
    result[genre].push(movie);
    return result;
  }, {});

console.log(groupedMovies);

// Usando some, verifica si hay alguna película del género "Horror".
const isThereHorrorMovie = movies.some((movie) => movie.genre === 'Horror')
console.log(isThereHorrorMovie);