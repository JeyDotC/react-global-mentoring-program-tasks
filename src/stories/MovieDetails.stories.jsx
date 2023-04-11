import { MovieDetails } from "../components/MovieDetails";
import '../App.css';

export default {
    title: "Movies/MovieDetails",
    component: MovieDetails
}

const Template = (args) => (<MovieDetails {...args} />)

export const Default = Template.bind({});
Default.args = {
    movieData: {
        imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
        movieName: "Pulp Fiction",
        releaseYear: 2004,
        relevantGenres: ["Action", "Adventure"],
        durationInMinutes: 154,
        description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        rating: 8.9
    },
};