import { Dropdown } from  '../components/Dropdown';
import '../App.css';

export default {
    title: "Movies/Dropdown",
    component: Dropdown,
}

const Template = (args) => (<Dropdown {...args} />);

export const Default = Template.bind({});
Default.args = {
    inputContent: "Menu Closed",
    children: "This is the menu."
};

export const Open = Template.bind({});
Open.args = {
    inputContent: "Menu Closed",
    children: "This is the menu.",
    menuVisible: true,
};