import { Counter } from "../components/Counter";

export default {
    title: 'Movies/Counter',
    component: Counter,
}

const Template = (args) => <Counter {...args} />

export const Default = Template.bind({});
Default.args = {};

export const InitalCount = Template.bind({});
InitalCount.args = {
    count: 150
}