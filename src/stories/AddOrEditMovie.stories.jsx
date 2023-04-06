import { MovieForm } from '../components/MovieForm';
import { Dialog } from '../components/Dialog';
import '../App.css';

export default {
    title: "Use Cases/Add or Edit Movie",
    component: MovieForm,
}

const TemplateAdd = (args) => (
    <Dialog show={true} title={<h1 className='mb-30p'>Add Movie</h1>}>
        <MovieForm {...args} />
    </Dialog>
);

const TemplateEdit = (args) => (
    <Dialog show={true} title={<h1 className='mb-30p'>Edit Movie</h1>}>
        <MovieForm {...args} />
    </Dialog>
);

const TemplateDelete = (args) => (
    <Dialog show={true} title={<h1 className='mb-30p'>Delete Movie</h1>}>
        <p>Are you sure you want to delete this movie?</p>
        <div className='text-right'>
            <button className='btn bg-primary'>Confirm</button>
        </div>
    </Dialog>
);

export const AddMovie = TemplateAdd.bind({});
AddMovie.args = {};

export const EditMovie = TemplateEdit.bind({});
EditMovie.args = {
    initialData: {
        imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
        movieName: "Pulp Fiction",
        releaseYear: 2004,
        relevantGenres: ["Action", "Adventure"],
        durationInMinutes: 154,
        description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        rating: 8.9
    }
};

export const DeleteMovie = TemplateDelete.bind({});
DeleteMovie.args = {};