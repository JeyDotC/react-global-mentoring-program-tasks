import { GenreSelect } from "../components/GenreSelect";
import '../App.css';

export default {
    title: 'Movies/GenreSelect',
    component: GenreSelect,
    argTypes: {
        genreNames: {
            description: "A list of genres to be displayed."
        },
        currentGenre: {
            description: "The current highlighted genre."
        }
    }
}

const Template = (args) => <GenreSelect {...args} />;

export const Empty = Template.bind({});
Empty.args = {
    genreNames: []
};

export const SomeElements = Template.bind({});
SomeElements.args = {
    genreNames: [
        "All",
        "Action",
        "Comedy",
        "Horror"
    ]
};

export const SelectAGenre = Template.bind({});
SelectAGenre.args = {
    genreNames: [
        "All",
        "Action",
        "Comedy",
        "Horror"
    ],
    currentGenre: "Action"
}