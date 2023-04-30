import PropTypes from "prop-types";
import { FormControl } from "../FormControl";

import './MovieForm.css';
import { Dropdown } from "../Dropdown";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { genreNames } from "../../constants";

// Taken from: https://urlregex.com/
const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)/;

function MovieForm({ initialData, onSubmit }) {

    const [selectGenreDropdownOpen, setSelectGenreDropdownOpen] = useState(false);

    const handleSelectGenreInputClicked = () => setSelectGenreDropdownOpen(!selectGenreDropdownOpen);
    const handleSelectGenreMenuBlur = () => setSelectGenreDropdownOpen(false);

    const handleValidate = ({
        movieName,
        releaseDate,
        imageUrl,
        rating,
        relevantGenres,
        durationInMinutes,
        description,
    }) => {
        const errors = {};
        if (!movieName || movieName.length === 0) {
            errors.movieName = "Required";
        }

        if (!releaseDate || releaseDate.length === 0) {
            errors.releaseDate = "Required";
        } else if (isNaN(Date.parse(releaseDate))) {
            errors.releaseDate = "Invalid Date format";
        }

        if (!imageUrl || imageUrl.length === 0) {
            errors.imageUrl = "Required";
        } else if (!urlRegex.test(imageUrl)) {
            errors.imageUrl = "Invalid URL format";
        }

        if (!rating || rating.length === 0) {
            errors.rating = "Required";
        } else if (isNaN(Number(rating))) {
            errors.rating = "Invalid Number";
        }

        if (!relevantGenres || relevantGenres.length === 0) {
            errors.relevantGenres = "Select at least one genre";
        }

        if (!durationInMinutes || durationInMinutes.length === 0) {
            errors.durationInMinutes = "Required";
        } else if (isNaN(Number(durationInMinutes))) {
            errors.durationInMinutes = "Invalid Number";
        }

        if (!description || description.length === 0) {
            errors.description = "Required";
        }

        return errors;
    };

    const handleFormSubmit = async (values, { setSubmitting, validateForm }) => {
        await (onSubmit && onSubmit({ ...values, releaseYear: Number(values.releaseDate.split('-')[0]) }));
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialData}
            validate={handleValidate}
            validateOnBlur={true}
            onSubmit={handleFormSubmit}
        >
            {({ isSubmitting, values, isValid }) => (
                <Form className="movie-form">
                    <div className="d-flex">
                        <FormControl
                            name="movieName"
                            label="Title"
                            placeHolder="Movie Title"
                        />
                        <FormControl
                            name="releaseDate"
                            label="Release Date"
                            placeHolder="Select Date"
                            type="date"
                        />
                    </div>
                    <div className="d-flex">
                        <FormControl
                            name="imageUrl"
                            label="Movie URL"
                            placeHolder="https://"
                        />
                        <FormControl
                            name="rating"
                            label="Rating"
                            placeHolder="7.8"
                            type="number"
                        />
                    </div>
                    <div className="d-flex">
                        <FormControl
                            name="relevantGenres"
                            label="Genre"
                            useChildrenOnly
                        >
                            <Dropdown
                                inputContent={
                                    <span className="pt-20p d-block">
                                        {values.relevantGenres?.length > 0
                                            ? `${values.relevantGenres.length} Selected`
                                            : "Select Genre"}
                                    </span>
                                }
                                menuVisible={selectGenreDropdownOpen}
                                onInputClick={handleSelectGenreInputClicked}
                                onBlur={handleSelectGenreMenuBlur}
                            >
                                {genreNames.map((genre) => (
                                    <label key={genre} className="checkbox">
                                        <Field type="checkbox" name="relevantGenres" value={genre} />
                                        {genre}
                                    </label>
                                ))}
                            </Dropdown>
                        </FormControl>
                        <FormControl
                            name="durationInMinutes"
                            label="Runtime"
                            placeHolder="Minutes"
                            type="number"
                        />
                    </div>
                    <FormControl
                        name="description"
                        label="Overview"
                        placeHolder="Movie Description"
                        multiline={true}
                    />

                    <div className="text-right">
                        <button
                            className="btn bg-none text-primary border border-primary me-13p"
                            type="reset"
                        >
                            Reset
                        </button>

                        <button
                            className="btn bg-primary"
                            type="submit"
                            disabled={isSubmitting || !isValid}
                        >
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
MovieForm.propTypes = {
    initialData: PropTypes.shape({
        imageUrl: PropTypes.string,
        movieName: PropTypes.string,
        releaseDate: PropTypes.string,
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