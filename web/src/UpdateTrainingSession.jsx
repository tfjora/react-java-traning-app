import React from "react";
import PropTypes from "prop-types";
import "./addTrainingSession.css";
import TrainingSession from "./TrainingSession";


class UpdateTrainingSession extends React.Component {
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
        this.onUpdatedClick = this.onUpdatedClick.bind(this);
    }

    render() {
        const {getFormatSecondsToHoursMinutesSecound} = this.props;
        const {name, date} = this.props.trainingSession;
        return (
            <div className="training-add__container">
                <input type="text" placeholder="Type" onChange={this.onUserInputTextChange} defaultValue={name}/>
                <input type="time" step="1" onChange={this.onUserInputTimeChange} defaultValue={getFormatSecondsToHoursMinutesSecound} />
                <input type="date" onChange={this.onUserInputDateChange} defaultValue={date}/>
                <input type="button" onClick={this.onUpdatedClick} value="Update"/>
            </div>
        )
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
    }

    onUpdatedClick() {
        const {userInputText, userInputTime, userInputDate} = this.state;
        let trainingSession = new TrainingSession();
        trainingSession.id = this.props.match.params.id;
        trainingSession.name = userInputText;
        trainingSession.minutes = this.findTimeSeconds(userInputTime);
        trainingSession.date = userInputDate;
        this.props.updatedTrainingSessionFn(trainingSession);
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

UpdateTrainingSession.propTypes = {
    updatedTrainingSessionFn: PropTypes.func.isRequired
};


export default UpdateTrainingSession;