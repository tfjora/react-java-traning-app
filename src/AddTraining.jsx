import React from "react";
import PropTypes from "prop-types";

class AddTraining extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userInput: ''
        }
        this.onUserInputChange = this.onUserInputChange.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onUserInputChange} />
                <input type="date" />
                <input type="button" onClick={this.onAddClick} />
            </div>)
    }

    onUserInputChange(event) {
        this.setState({
            userInput: event.target.value
        })
    }

    onAddClick() {
        this.props.createTrainingRecordFn(this.state.userInput)
    }
}

AddTraining.propTypes = {
    createTrainingRecordFn: PropTypes.func.isRequired
}

export default AddTraining;