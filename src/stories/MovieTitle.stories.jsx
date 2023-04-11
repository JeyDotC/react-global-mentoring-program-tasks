import { MovieTitle } from "../components/MovieTitle";
import '../App.css';

export default {
    title: "Movies/MovieTitle",
    component: MovieTitle
}

const Template = (args) => (<MovieTitle {...args} />)

export const Default = Template.bind({});
Default.args = {
    movieData: {
        imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
        movieName: "Pulp Fiction",
        releaseYear: 2004,
        relevantGenres: ["Action"],
    },
};