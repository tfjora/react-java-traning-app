import React from "react";
import PropTypes from "prop-types";
import "./addTrainingSession.css";

class UpdateTrainingSession extends React.Component {

    constructor(props) {
        super(props);
    }


    render()
        {
            const { getFormatSecondsToHoursMinutesSecound, trainingSession } = this.props;
            const { id, name, date } = this.props.trainingSession;
            return (
                <div className="training-add__container">
                    <input type="text" placeholder="Type" defaultValue={name} />
                    <input type="time" step="1" defaultValue={getFormatSecondsToHoursMinutesSecound} />
                    <input type="date"  defaultValue={date}/>
                    <input type="button" value="Update" />
                </div>
            )
        }
}

export default UpdateTrainingSession;