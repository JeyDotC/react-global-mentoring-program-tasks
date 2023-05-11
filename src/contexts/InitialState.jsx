import { createContext } from "react";

const defaultMovieList = {
    totalAmount: 0,
    data: [],
    offset: 0,
    limit: 6
};


const InitialStateContext = createContext();

function InitialState({ movieList = defaultMovieList, currentMovie, children }) {

    return (
        <InitialStateContext.Provider value={{
            movieList, currentMovie
        }}>
            {children}
        </InitialStateContext.Provider>
    );
}

export { InitialState, InitialStateContext }