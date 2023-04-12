import { Dropdown } from  '../components/Dropdown';
import '../App.css';

export default {
    title: "Movies/Dropdown",
    component: Dropdown,
}

const Template = (args) => (<Dropdown {...args} />);

export const Default = Template.bind({});
Default.args = {
    inputContent: "Click Here to Show the Dropdown",
    children: "This is the menu."
};