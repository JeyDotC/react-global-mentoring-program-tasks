import { Dialog } from '../components/Dialog';
import '../App.css';

export default {
    title: 'Movies/Dialog',
    component: Dialog,
}

const Template = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
    show: true,
    title: "Hello World",
    children: "This is a Dialog",
};
