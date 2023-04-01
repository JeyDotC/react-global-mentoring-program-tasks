import { SearchForm } from "../components/SearchForm";
import '../App.css';

export default {
    title: "Movies/SearchForm",
    component: SearchForm
}

const Template = (args) => <SearchForm {...args} />

export const Default = Template.bind({});
Default.args = {};

export const InitialText = Template.bind({});
InitialText.args = {
    initialSearchText: 'Initial Text'
};