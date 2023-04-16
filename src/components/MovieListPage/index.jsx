import { useState } from "react";
import { SearchForm } from "../SearchForm";
import { GenreSelect } from "../GenreSelect";
import { SortControl } from "../SortControl";

import './MovieListPage.css';
import { MovieTitle } from "../MovieTitle";
import { MovieDetails } from "../MovieDetails";

const genreNames = [
     "All",
     "Comedy",
     "Romance",
     "Cartoon"
];

const movies = [
     {
          "id": 337167,
          "title": "Fifty Shades Freed",
          "tagline": "Don't miss the climax",
          "vote_average": 6.1,
          "vote_count": 1195,
          "release_date": "2018-02-07",
          "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
          "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
          "budget": 55000000,
          "revenue": 136906000,
          "genres": [
               "Drama",
               "Romance"
          ],
          "runtime": 106
     },
     {
          "id": 269149,
          "title": "Zootopia",
          "tagline": "Welcome to the urban jungle.",
          "vote_average": 7.7,
          "vote_count": 6795,
          "release_date": "2016-02-11",
          "poster_path": "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
          "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
          "budget": 150000000,
          "revenue": 1023784195,
          "genres": [
               "Animation",
               "Adventure",
               "Family",
               "Comedy"
          ],
          "runtime": 108
     },
     {
          "id": 181808,
          "title": "Star Wars: The Last Jedi",
          "tagline": "The Saga Continues",
          "vote_average": 7.1,
          "vote_count": 4732,
          "release_date": "2017-12-13",
          "poster_path": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
          "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
          "budget": 200000000,
          "revenue": 1325937250,
          "genres": [
               "Fantasy",
               "Adventure",
               "Science Fiction"
          ],
          "runtime": 152
     },
     {
          "id": 284054,
          "title": "Black Panther",
          "tagline": "Long live the king",
          "vote_average": 7.3,
          "vote_count": 3788,
          "release_date": "2018-02-13",
          "poster_path": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
          "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
          "budget": 200000000,
          "revenue": 1245257672,
          "genres": [
               "Action",
               "Adventure",
               "Fantasy",
               "Science Fiction"
          ],
          "runtime": 134
     },
     {
          "id": 354912,
          "title": "Coco",
          "tagline": "The celebration of a lifetime",
          "vote_average": 7.8,
          "vote_count": 3619,
          "release_date": "2017-10-27",
          "poster_path": "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
          "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
          "budget": 175000000,
          "revenue": 700920729,
          "genres": [
               "Adventure",
               "Comedy",
               "Family",
               "Animation"
          ],
          "runtime": 105
     },
     {
          "id": 333339,
          "title": "Ready Player One",
          "tagline": "A better reality awaits.",
          "vote_average": 8.1,
          "vote_count": 617,
          "release_date": "2018-03-28",
          "poster_path": "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
          "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
          "budget": 175000000,
          "revenue": 0,
          "genres": [
               "Adventure",
               "Science Fiction",
               "Action"
          ],
          "runtime": 140
     }
];

function toMovieData({
     poster_path: imageUrl,
     title: movieName,
     release_date,
     genres: relevantGenres,
     vote_average: rating,
     runtime: durationInMinutes,
     overview: description,
}) {
     return {
          imageUrl,
          movieName,
          releaseYear: Number(release_date.split('-')[0]),
          relevantGenres,
          rating,
          durationInMinutes,
          description,
     }
}

function MovieListPage() {
     /**
      * search query
 sort criterion
 active genre
 movie list (array)
 selected movie (default to undefined or null)
      */
     const [searchQuery, setSearchQuery] = useState();
     const [sortCriterion, setSortCriterion] = useState();
     const [activeGenre, setActiveGenre] = useState('All');
     const [movieList, setMovieList] = useState(movies);
     const [activeMovie, setActiveMovie] = useState();

     const handleGenreSelect = (genre) => setActiveGenre(genre);
     const handleSortControlChange = (criterion) => setSortCriterion(criterion);
     const handleMovieClick = (movieData) => setActiveMovie(movieData);
     const handleSearch = (searchTerm) => setSearchQuery(searchTerm);
     const handleBackToSearch = () => setActiveMovie(undefined);

     return (
          <>
               <section id="heading-content">
                    <div id="heading-content-tools" className="mb-30p">
                         {activeMovie !== undefined && (
                              <button id="back-to-search" className="icon-button text-primary" title="Return to search" onClick={handleBackToSearch}>
                                   <i>&#9906;</i>
                              </button>
                         )}
                    </div>
                    {activeMovie !== undefined
                         ? <MovieDetails movieData={activeMovie} />
                         : <SearchForm onSearch={handleSearch} />}
               </section>

               <section id="main-content">
                    <div id="main-content-tools" className="d-flex">
                         <GenreSelect genreNames={genreNames} currentGenre={activeGenre} onSelect={handleGenreSelect} />
                         <SortControl options={["Release Date", "Title",]} currentSelection={sortCriterion} onChange={handleSortControlChange} />
                    </div>

                    <div id="main-content-movies">
                         {movieList.map(({ id, ...movieData }) => (
                              <MovieTitle key={id} movieData={toMovieData(movieData)}
                                   onClick={handleMovieClick}
                              />
                         ))}
                    </div>
               </section>
          </>
     );
}

export { MovieListPage }