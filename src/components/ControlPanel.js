import React, { Component } from 'react';

import { connect } from 'react-redux';
import { move } from '../actions';

class ControlPanel extends Component {

    render() {
        return (
            <div>
                <p>Gas: {this.props.gas}</p>
                <p>Score: {this.props.score}</p>
                <p>Position: ({this.props.x}, {this.props.y})</p>

                <section>
                    <div>
                        <button onClick={() => this.props.up()}>Up</button>
                    </div>
                    <div>
                        <button onClick={() => this.props.left()}>Left</button>
                        <button onClick={() => this.props.right()}>Right</button>
                    </div>
                    <div>
                        <button onClick={() => this.props.down()}>Down</button>
                    </div>
                </section>
            </div>
        );
    }
}

function state2props(state) {
    return {
        gas: state.gas,
        score: state.score,
        x: state.x,
        y: state.y,
    };

}

function dispatch2props(dispatch) {
    return {
        up: () => dispatch(move(0, 1)),
        down: function () {
            dispatch(move(0, -1));
        },
        left: () => dispatch(move(-1, 0)),
        right: () => dispatch(move(1, 0)),
    };
}

export default connect(state2props, dispatch2props)(ControlPanel);