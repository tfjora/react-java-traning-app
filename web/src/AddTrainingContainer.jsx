import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddTraining from "./AddTraining";
import {createTrainingSession} from "./trainingActions";
import { getNextTrainingSessionId } from "./trainingReducer";

const AddTrainingContainer = props => <AddTraining {...props} />;

const mapStateToProps = state => ({
    nextId: getNextTrainingSessionId(state)
});

const mapDispatchToProps = dispatch => ({
    createTrainingSessionFn: (id, name, time, date) => dispatch(createTrainingSession(id, name, time, date))
});

AddTrainingContainer.propTypes = {
    createTrainingSessionFn: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTrainingContainer);