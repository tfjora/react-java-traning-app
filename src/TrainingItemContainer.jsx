import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TrainingItem from "./TrainingItem";
import TrainingSession from "./TrainingSession";
import { deleteTrainingSession } from "./trainingActions";

const TrainingItemContainer = props => <TrainingItem {...props} />

const mapDispatchToProps = dispatch => ({
    deleteTrainingSessionFn: id => dispatch(deleteTrainingSession(id))
});

TrainingItemContainer.propTypes = {
    trainingSession: PropTypes.instanceOf(TrainingSession).isRequired
}

export default connect(
    null,
    mapDispatchToProps
)(TrainingItemContainer);