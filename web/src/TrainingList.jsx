import React from "react";
import PropTypes from "prop-types";
import TrainingItemContainer from "./TrainingItemContainer";
import TrainingSession from "./TrainingSession";

const TrainingList = props => (
    props.trainingSessions.map(trainingSession => <TrainingItemContainer key={trainingSession.id} trainingSession={trainingSession} />)
);

TrainingList.propTypes = {
    trainingSessions: PropTypes.arrayOf(PropTypes.instanceOf(TrainingSession)).isRequired
}

export default TrainingList;