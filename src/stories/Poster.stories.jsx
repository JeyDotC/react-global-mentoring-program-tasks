import { Poster } from  '../components/Poster';
import '../App.css';

export default {
    title: 'Movies/Poster',
    component: Poster,
};

const Template = (args) => (<Poster {...args} />);

export const Default = Template.bind({});
Default.args = {
    imageUrl: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/pulpfiction.2436_500x749.jpg?v=1620048742",
    movieName: "Pulp Fiction"
}