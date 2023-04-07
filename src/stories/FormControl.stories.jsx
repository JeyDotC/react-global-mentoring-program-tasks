import '../App.css';
import { FormControl } from '../components/FormControl';

export default {
    title: "Movies/FormControl",
    component: FormControl,
    argTypes: {
        initialValue: {
            type: 'string'
        }
    }
}

const Template = (args) => (<FormControl {...args} />);

export const Default = Template.bind({});
Default.args = {
    name: "my-control", 
    label: "Label", 
    placeHolder: "Placeholder"
};

export const Multiline = Template.bind({});
Multiline.args = {
    name: "my-multiline-control", 
    label: "Label", 
    placeHolder: "Placeholder",
    multiline: true,
};
