import { useState } from "react";
import { SearchForm } from "../SearchForm";
import { GenreSelect } from "../GenreSelect";
import { SortControl } from "../SortControl";

import './MovieListPage.css';
import { MovieTitle } from "../MovieTitle";
import { MovieDetails } from "../MovieDetails";
import { toMovieData } from "../../formatters";
import { useMovieListQuery } from "../../hooks/useMovieListQuery";
import { useSearchParams } from "react-router-dom";
import { useMoviesSearchParams } from "../../hooks/useMoviesSearchParams";

const genreNames = [
     "All",
     "Action",
     "Adventure",
     "Comedy",
     "Drama",
     "Thriller",
];

function MovieListPage() {
     const [activeMovie, setActiveMovie] = useState();

     const [searchParams, setSearchParams] = useMoviesSearchParams();

     const { searchQuery, sortCriterion, activeGenre } = searchParams;

     const { result } = useMovieListQuery({ searchQuery, sortCriterion, activeGenre });

     const { data: movieList } = result;

     const handleGenreSelect = (genre) => setSearchParams({ genre });
     const handleSortControlChange = (orderBy) => setSearchParams({ orderBy });
     const handleSearch = (s) => setSearchParams({ s });
     const handleSearchClear = () => setSearchParams({ s: "" });

     const handleMovieClick = (movieData) => setActiveMovie(movieData);
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
                         : <SearchForm
                              initialSearchText={searchQuery}
                              onSearch={handleSearch}
                              onClear={handleSearchClear}
                         />}
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