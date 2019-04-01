//the below code gives the idea of implementation of PropTypes for typechecking.
//Some points regarding PropTypes :-
//Prop-Type is library for type-checking.
// PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
//It has nothing to do with redux.  
import React, { Component } from 'react'
import PropTypes from 'prop-types';
class Sample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>
                    {this.props.arrayProp}
                    <br />
                    {this.props.stringProp}
                </h2>
            </div>
        )
    }


}
Sample.propTypes = {
    arrayProp: PropTypes.array,
    stringProp: PropTypes.string
}
Sample.defaultProps = {
    arrayProp: ['ram', 'sham'],
    stringProp: 123045
}
export default Sample;