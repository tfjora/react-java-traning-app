import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TrainingItem from "../view/TrainingItem";
import { deleteTrainingSessionWithId } from "../actions/trainingSessionActions";

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