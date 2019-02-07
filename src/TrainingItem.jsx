import React from "react";
import PropTypes from "prop-types";
import TrainingSession from "./TrainingSession";
import "./trainingItem.css";

class TrainingItem extends React.Component {
    
    constructor(props) {
        super(props)

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    render() {
        const { name, time, date } = this.props.trainingSession;
        return(
        <div className="training-show__container">
            <div className="training-show__text">
                <p> Training: {name} </p>
                <p> Time: {time}</p>
                <p> Date: {date}</p>
                <p> <input type="button" onClick={this.onDeleteClick} value="Delete"/> </p>
            </div>
        </div>
        )
    }

    onDeleteClick() {
        this.props.deleteTrainingSessionFn(this.props.trainingSession.id)
    }

}

TrainingItem.propTypes = {
    trainingSession: PropTypes.instanceOf(TrainingSession).isRequired
    
}

export default TrainingItem;