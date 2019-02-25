import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import UpdateTrainingSession from "./UpdateTrainingSession";
import { getTrainingSession } from "./trainingSessionReducer";

const UpdateTrainingSessionContainer = props => <UpdateTrainingSession {...props} />;

const mapStateToProps = (state, ownProps) => ({
    trainingSession: getTrainingSession(ownProps.match.params.id, state)
});

export default connect(
    mapStateToProps,
    null
)(UpdateTrainingSessionContainer)