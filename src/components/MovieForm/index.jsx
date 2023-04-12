import PropTypes from "prop-types";
import { FormControl } from "../FormControl";

import './MovieForm.css';
import { Dropdown } from "../Dropdown";

function MovieForm({ initialData, onSubmit }) {

    const { imageUrl, movieName, releaseYear, relevantGenres, rating, durationInMinutes, description } = initialData;

    const handleFormSubmit = (event) => {
        event.stopPropagation();
        event.preventDefault();

        onSubmit && onSubmit(event);
    }

    return (
        <form className="movie-form" onSubmit={handleFormSubmit}>
            <div className="d-flex">
                <FormControl
                    name="movieName"
                    label="Title"
                    placeHolder="Movie Title"
                    initialValue={movieName}
                />
                <FormControl
                    name="releaseYear"
                    label="Release Date"
                    placeHolder="Select Date"
                    initialValue={releaseYear}
                />
            </div>
            <div className="d-flex">
                <FormControl
                    name="imageUrl"
                    label="Movie URL"
                    placeHolder="https://"
                    initialValue={imageUrl}
                />
                <FormControl
                    name="rating"
                    label="Rating"
                    placeHolder="7.8"
                    initialValue={rating}
                />
            </div>
            <div className="d-flex">
                <FormControl
                    name="relevantGenres"
                    label="Genre"
                    initialValue={relevantGenres}
                    useChildrenOnly
                >
                    <Dropdown 
                        inputContent={<span className="pt-20p d-block">Select Genre</span>}
                    >
                        <label className="checkbox">
                            <input type="checkbox" name="genres[0]" value="Crime" defaultChecked={relevantGenres?.some(c => c === "Crime")} />
                            Crime
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="genres[1]" value="Documentary" defaultChecked={relevantGenres?.some(c => c === "Documentary")} />
                            Documentary
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="genres[2]" value="Horror" defaultChecked={relevantGenres?.some(c => c === "Horror")} />
                            Horror
                        </label>
                        <label className="checkbox">
                            <input type="checkbox" name="genres[3]" value="Comedy" defaultChecked={relevantGenres?.some(c => c === "Comedy")} />
                            Comedy
                        </label>
                    </Dropdown>
                </FormControl>
                <FormControl
                    name="durationInMinutes"
                    label="Runtime"
                    placeHolder="Minutes"
                    initialValue={durationInMinutes}
                />
            </div>
            <FormControl
                name="description"
                label="Overview"
                placeHolder="Movie Description"
                initialValue={description}
                multiline={true}
            />

            <div className="text-right">
                <button className="btn bg-none text-primary border border-primary me-13p">Reset</button>
                <button className="btn bg-primary" type="submit">Submit</button>
            </div>
        </form>
    );
}
MovieForm.propTypes = {
    initialData: PropTypes.shape({
        imageUrl: PropTypes.string,
        movieName: PropTypes.string,
        releaseYear: PropTypes.number,
        relevantGenres: PropTypes.arrayOf(PropTypes.string),
        rating: PropTypes.number,
        durationInMinutes: PropTypes.number,
        description: PropTypes.string,
    }),
    onSubmit: PropTypes.func,
};

MovieForm.defaultProps = {
    initialData: {},
};

export { MovieForm }