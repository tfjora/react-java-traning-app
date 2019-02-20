import React from "react";
import PropTypes from "prop-types";
import "./trainingItem.css";

class TrainingItem extends React.Component {

    constructor(props) {
        super(props);

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    render() {
        const {name, minutes, date} = this.props.trainingSession;
        return (
                    <tr>
                        <td>
                            <p> {name} </p>
                        </td>
                        <td>
                            <p> {minutes}</p>
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
         this.props.deleteTrainingSessionWithIdFn(this.props.trainingSession.id)
    }
}

TrainingItem.propTypes = {
    trainingSession: PropTypes.instanceOf(Object).isRequired
};

export default TrainingItem;