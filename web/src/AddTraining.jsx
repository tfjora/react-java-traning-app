import React from "react";
import PropTypes from "prop-types";
import "./addTraining.css";

class AddTraining extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInputText: '',
            userInputTime: '',
            userInputDate: ''
        };
        this.onUserInputTextChange = this.onUserInputTextChange.bind(this);
        this.onUserInputTimeChange = this.onUserInputTimeChange.bind(this);
        this.onUserInputDateChange = this.onUserInputDateChange.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
    }

    render() {
        return (
            <div className="training-add__container">
                <input type="text" onChange={this.onUserInputTextChange} />
                <input type="time" onChange={this.onUserInputTimeChange} />
                <input type="date" onChange={this.onUserInputDateChange} />
                <input type="button" onClick={this.onAddClick} value="Add" />
            </div>)
    }

    onUserInputTextChange(event) {
        this.setState({
            userInputText: event.target.value
        })
    }

    onUserInputTimeChange(event) {
        this.setState({
            userInputTime: event.target.value
        })
    }

    onUserInputDateChange(event) {
        this.setState({
            userInputDate: event.target.value
        })
    }

    onAddClick() {
        const { nextId, createTrainingSessionFn } = this.props;
        const { userInputText, userInputTime, userInputDate } = this.state;
        createTrainingSessionFn(nextId, userInputText, userInputTime, userInputDate)
    }

}

AddTraining.propTypes = {
    createTrainingSessionFn: PropTypes.func.isRequired
};

export default AddTraining;