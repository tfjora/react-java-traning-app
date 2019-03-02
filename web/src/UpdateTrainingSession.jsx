import React from "react";
import "./addTrainingSession.css";

const UpdateTrainingSession = props => {
    const {getFormatSecondsToHoursMinutesSecound} = props;
    const {name, date} = props.trainingSession;
    console.log("Name: " + name);
    return (
        <div className="training-add__container">
            <input type="text" placeholder="Type" defaultValue={name}/>
            <input type="time" step="1" defaultValue={getFormatSecondsToHoursMinutesSecound}/>
            <input type="date" defaultValue={date}/>
            <input type="button" value="Update"/>
        </div>

    )
};

export default UpdateTrainingSession;