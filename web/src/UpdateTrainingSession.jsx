import React from "react";
import PropTypes from "prop-types";
import "./addTrainingSession.css";

class UpdateTrainingSession extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }
        render()
        {
            return (
                <div className="training-add__container">
                    <input type="text" placeholder="Type" />
                    <input type="time" step="1" />
                    <input type="date" />
                    <input type="button" value="Update" />
                </div>
            )
        }
}

export default UpdateTrainingSession;