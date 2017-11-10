import React from 'react';
import  { connect } from 'react-redux';
import  { setDiff } from '../actions';

class Option extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeDiff = this.onChangeDiff.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" value={ this.props.diff } onChange={this.onChangeDiff}></input>
            </div>
        );
    }

    onChangeDiff(e) {
        if(isNaN(e.target.value))
            return;

        if(e.target.value=='') {
            this.setState({ diff: '0' });
        }

        this.props.onUpdateDiff(parseInt(e.target.value));
    }
}

let mapStateToProps = (state) => {
    return {
        diff: state.counter.diff
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value))
    };
}

Option = connect(mapStateToProps, mapDispatchToProps)(Option);

export default Option;