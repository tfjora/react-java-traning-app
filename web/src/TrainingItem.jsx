import React from "react";
import PropTypes from "prop-types";
import TrainingSession from "./TrainingSession";
import "./trainingItem.css";

class TrainingItem extends React.Component {

    constructor(props) {
        super(props);

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    render() {
        const {name, time, date, title} = this.props.trainingSession;
        return (
                    <tr>
                        <td>
                            <p> {name} {title}</p>
                        </td>
                        <td>
                            <p> {time}</p>
                        </td>
                        <td>
                            <p> {date}</p>
                        </td>
                        <td>
                            <p><input type="button" onClick={this.onDeleteClick} value="Delete"/></p>
                        </td>
                    </tr>
                )
    }

    onDeleteClick() {
        this.props.deleteTrainingSessionFn(this.props.trainingSession.id)
    }
}

TrainingItem.propTypes = {
    trainingSession: PropTypes.instanceOf(TrainingSession).isRequired
};

export default TrainingItem;