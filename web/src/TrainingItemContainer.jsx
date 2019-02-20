import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TrainingItem from "./TrainingItem";
import { deleteTrainingSessionWithId } from "./trainingSessionActions";

const TrainingItemContainer = props => <TrainingItem {...props} />;

const mapDispatchToProps = dispatch => ({
    deleteTrainingSessionWithIdFn: id => dispatch(deleteTrainingSessionWithId(id))
});

TrainingItemContainer.propTypes = {
    trainingSession: PropTypes.instanceOf(Object).isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(TrainingItemContainer);