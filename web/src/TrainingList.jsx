import React from "react";
import PropTypes from "prop-types";
import TrainingItemContainer from "./TrainingItemContainer";

const TrainingList = props => (
    <div className="training-show__container">
            <table>
                <tbody>
                <tr>
                    <th>Type</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th></th>
                </tr>
                {props.trainingSessions.map(trainingSession =>

                    <TrainingItemContainer key={trainingSession.id} trainingSession={trainingSession}/>
                )}
                </tbody>
            </table>

    </div>
);

TrainingList.propTypes = {
    trainingSessions: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired
};

export default TrainingList;