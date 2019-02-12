import React from "react";
import PropTypes from "prop-types";
import TrainingItemContainer from "./TrainingItemContainer";
import TrainingSession from "./TrainingSession";

const TrainingList = props => (
    <table>
        {props.trainingSessions.map(trainingSession =>
            <tr>
                <td>
                    <TrainingItemContainer key={trainingSession.id} trainingSession={trainingSession} />
                </td>
            </tr>
        )}
    </table>
);

TrainingList.propTypes = {
    trainingSessions: PropTypes.arrayOf(PropTypes.instanceOf(TrainingSession)).isRequired
};

export default TrainingList;