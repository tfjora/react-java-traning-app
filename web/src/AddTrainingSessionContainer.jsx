import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddTrainingSession from "./AddTrainingSession";
import { createTrainingSession } from "./trainingSessionActions";
import { getNowAsDateString } from "./trainingSessionReducer";

const AddTrainingSessionContainer = props => <AddTrainingSession {...props} />

const mapStateToProps = () => ({
    getTodaysNowDate2: getNowAsDateString()
});

const mapDispatchToProps = dispatch => ({
    createTrainingSessionFn: trainingSession => dispatch(createTrainingSession(trainingSession)),
});


AddTrainingSessionContainer.propTypes = {
    createTrainingSessionFn: PropTypes.func.isRequired
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTrainingSessionContainer);