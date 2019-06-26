import React from "react";
import PropTypes from "prop-types";
import "../css/addTrainingSession.css";
import TrainingSession from "../class/TrainingSession";

class AddTrainingSession extends React.Component {
    constructor(props) {
        super(props);
        const {getTodaysNowDate2} = this.props;
        this.state = {
            userInputText: '',
            userInputTime: '',
            userInputDate: getTodaysNowDate2
        };
        this.onUserInputTextChange = this.onUserInputTextChange.bind(this);
        this.onUserInputTimeChange = this.onUserInputTimeChange.bind(this);
        this.onUserInputDateChange = this.onUserInputDateChange.bind(this);
        this.onAddClick = this.onAddClick.bind(this);
    }

    render() {
        return (
            <div className="training-add__container">
                <input type="text" placeholder="Type" onChange={this.onUserInputTextChange}/>
                <input type="time" onChange={this.onUserInputTimeChange} step="1" defaultValue="00:00:00"/>
                <input type="date" onChange={this.onUserInputDateChange} defaultValue={this.props.getTodaysNowDate2}/>
                <input type="button" onClick={this.onAddClick} value="Add"/>
            </div>)
    }

    onUserInputTextChange(event) {
        this.setState({
            userInputText: event.target.value
        });
    }

    onUserInputTimeChange(event) {
        this.setState({
            userInputTime: event.target.value
        });
    }

    onUserInputDateChange(event) {
        this.setState({
            userInputDate: event.target.value
        });

        console.log("Dato: " + this.userInputDate);
    }

    onAddClick() {
        const {userInputText, userInputTime, userInputDate} = this.state;
        this.addTrainingSession(userInputText, userInputTime, userInputDate);
        this.addTrainingSessionNotification("Created");
    }

    addTrainingSession(userInputText, userInputTime, userInputDate) {

        let trainingSession = new TrainingSession();
        trainingSession.name = userInputText;
        trainingSession.minutes = this.findTimeSeconds(userInputTime);
        trainingSession.date = userInputDate;
        this.props.createTrainingSessionFn(trainingSession);
    }

    findTimeSeconds(userInputTime) {
        let seconds = 0;
        if (userInputTime != null) {
            let time = userInputTime.split(':');
            let seconds = (+time[0]) * 60 * 60 + (+time[1]) * 60 + (+time[2]);
            return seconds;
        }
        return seconds
    }
}

AddTrainingSession.propTypes = {
    createTrainingSessionFn: PropTypes.func.isRequired
};

export default AddTrainingSession;