import React from "react";
import PropTypes from 'prop-types';

const el = React.createElement;

class Counter extends React.Component {

    static propTypes = {
        count: PropTypes.number
    };

    static defaultProps = {
        count: 0
    };

    constructor(props){
        super(props);

        const { count } = props;

        this.state = {
            count
        };
    }

    handleIncrementClick(){
        this.setState(({ count }) => ({ count: count + 1 }));
    }

    handleDecrementClick(){
        this.setState(({ count }) => ({ count: count - 1 }));
    }
    
    render() {
        const { count } = this.state;

        return el('div', null, 
            el('strong', null, 'Counter value:'),
            ' ',
            el('button', {
                title: 'Decrement by 1',
                type: 'button',
                onClick: () => this.handleDecrementClick(),
            }, '-'),
            ' ',
            el('span', null, count),
            ' ',
            el('button', {
                title: 'Increment by 1',
                type: 'button',
                onClick: () => this.handleIncrementClick(),
            }, '+'),
        );
    }
}

export { Counter };