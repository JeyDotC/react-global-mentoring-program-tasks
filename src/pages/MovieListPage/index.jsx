import { GenreSelect } from "../../components/GenreSelect";
import { SortControl } from "../../components/SortControl";

import './MovieListPage.css';
import { MovieTitle } from "../../components/MovieTitle";
import { toMovieData } from "../../formatters";
import { useMovieListQuery } from "../../hooks/useMovieListQuery";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

const genreNames = [
     "All",
     "Action",
     "Adventure",
     "Comedy",
     "Drama",
     "Thriller",
];

function MovieListPage() {
     const [searchParams, setSearchParams] = useSearchParams({
          query: "",
          orderBy: "",
          genre: "All",
     });
     const navigate = useNavigate();

     const searchQuery = searchParams.get('query');
     const sortCriterion = searchParams.get('orderBy');
     const activeGenre = searchParams.get('genre');

     const { result } = useMovieListQuery({
          searchQuery,
          sortCriterion,
          activeGenre,
     });

     const { data: movieList } = result;

     const handleGenreSelect = (genre) => {
          searchParams.set('genre', genre);
          setSearchParams(searchParams);
     }
     const handleSortControlChange = (orderBy) => {
          searchParams.set('orderBy', orderBy);
          setSearchParams(searchParams);
     }

     const handleMovieClick = ({ id }) => navigate({
          pathname: `/${id}`,
          search: searchParams.toString(),
     });

     return (
          <>
               <section id="heading-content">
                    <Outlet />
               </section>

               <section id="main-content">
                    <div id="main-content-tools" className="d-flex">
                         <GenreSelect 
                              genreNames={genreNames}
                              currentGenre={activeGenre}
                              onSelect={handleGenreSelect}
                         />
                         <SortControl
                              options={["Release Date", "Title",]}
                              currentSelection={sortCriterion}
                              onChange={handleSortControlChange}
                         />
                    </div>

                    <div id="main-content-movies">
                         {movieList.map((movieData) => (
                              <MovieTitle 
                                   key={movieData.id} 
                                   movieData={toMovieData(movieData)}
                                   onClick={handleMovieClick}
                              />
                         ))}
                    </div>
               </section>
          </>
     );
}

export { MovieListPage }