
import { MovieForm } from '../components/MovieForm';
import '../App.css';

export default {
    title: 'Movies/MovieForm',
    component: MovieForm,
}

const Template = (args) => <MovieForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
