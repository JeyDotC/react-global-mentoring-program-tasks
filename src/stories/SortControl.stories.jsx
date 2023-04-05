import { SortControl } from '../components/SortControl';
import '../App.css';

export default {
    title: "Movies/SortControl",
    component: SortControl
};

const Template = (args) => (<SortControl {...args} />);

export const Default = Template.bind({});
Default.args = {
    id: "my-sort-control",
    options: [
        "Release Date",
        "Title",
    ],
    currentSelection: "Title"
}