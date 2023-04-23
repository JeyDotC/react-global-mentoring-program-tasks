import { useState } from "react";
import { SearchForm } from "../../components/SearchForm";
import { GenreSelect } from "../../components/GenreSelect";
import { SortControl } from "../../components/SortControl";

import './MovieListPage.css';
import { MovieTitle } from "../../components/MovieTitle";
import { MovieDetails } from "../../components/MovieDetails";
import { toMovieData } from "../../formatters";
import { useMovieListQuery } from "../../hooks/useMovieListQuery";
import { Outlet, generatePath, useNavigate, useSearchParams } from "react-router-dom";
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
     const navigate = useNavigate();

     const [searchParams, setSearchParams, originalSearchParams] = useMoviesSearchParams();

     const { sortCriterion, activeGenre } = searchParams;

     const { result } = useMovieListQuery(searchParams);

     const { data: movieList } = result;

     const handleGenreSelect = (genre) => setSearchParams({ genre });
     const handleSortControlChange = (orderBy) => setSearchParams({ orderBy });

     const handleMovieClick = ({ id }) => navigate({
          pathname: `/${id}`,
          search: originalSearchParams.toString(),
     });

     return (
          <>
               <section id="heading-content">
                    <Outlet />
               </section>

               <section id="main-content">
                    <div id="main-content-tools" className="d-flex">
                         <GenreSelect genreNames={genreNames} currentGenre={activeGenre} onSelect={handleGenreSelect} />
                         <SortControl options={["Release Date", "Title",]} currentSelection={sortCriterion} onChange={handleSortControlChange} />
                    </div>

                    <div id="main-content-movies">
                         {movieList.map((movieData) => (
                              <MovieTitle key={movieData.id} movieData={toMovieData(movieData)}
                                   onClick={handleMovieClick}
                              />
                         ))}
                    </div>
               </section>
          </>
     );
}

export { MovieListPage }