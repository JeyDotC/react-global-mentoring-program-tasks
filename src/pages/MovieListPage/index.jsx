import { GenreSelect } from "../../components/GenreSelect";
import { SortControl } from "../../components/SortControl";

import './MovieListPage.css';
import { MovieTitle } from "../../components/MovieTitle";
import { toMovieData } from "../../formatters";
import { useMovieListQuery } from "../../hooks/useMovieListQuery";
import { Link, Outlet, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "../../components/Dialog";
import { genreNames } from "../../constants";

function MovieListPage() {

     const [selectedMovieId, setSelectedMovieId] = useState();
     
     const contextMenuPlacementRef = useRef(undefined);

     useEffect(() => {
          const closeDialog = () => setSelectedMovieId(undefined);
          document.body.addEventListener('contextmenu', closeDialog);
          document.body.addEventListener('click', closeDialog);
          return () => {
               document.body.removeEventListener('contextmenu', closeDialog);
               document.body.removeEventListener('click', closeDialog);
          }
     },[]);

     const [searchParams, setSearchParams] = useSearchParams({
          query: "",
          orderBy: "",
          genre: "All",
     });
     const navigate = useNavigate();
     const { key } = useLocation();

     const searchQuery = searchParams.get('query');
     const sortCriterion = searchParams.get('orderBy');
     const activeGenre = searchParams.get('genre');

     const { result } = useMovieListQuery({
          searchQuery,
          sortCriterion,
          activeGenre,
          key,
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

     const handleMovieContextMenu = ({ id }, e) => {
          e.stopPropagation();
          contextMenuPlacementRef.current = {
               left: `${e.clientX}px`,
               top: `${e.clientY}px`,
          };
          setSelectedMovieId(id);
     }

     const handleContextMenuClose = () => setSelectedMovieId(undefined);

     return (
          <>
               <section id="heading-content">
                    <Outlet />
               </section>

               <section id="main-content">
                    <div id="main-content-tools" className="d-flex">
                         <GenreSelect 
                              genreNames={["All", ...genreNames]}
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
                                   onContextMenu={handleMovieContextMenu}
                              />
                         ))}
                    </div>
               </section>

               <Dialog 
                    show={selectedMovieId !== undefined} 
                    onCloseButtonClicked={handleContextMenuClose}
                    mode="context"
                    dialogStyles={contextMenuPlacementRef.current}
               >
                    <Link to={{
                         pathname: `${selectedMovieId}/edit`,
                         search: searchParams.toString(),
                    }} className="btn text-default">
                    Edit
                    </Link>
               </Dialog>
          </>
     );
}

export { MovieListPage }