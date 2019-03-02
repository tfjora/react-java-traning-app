import React from "react";
import UpdateTrainingSession from "./UpdateTrainingSession";
import {connect} from "react-redux";

import { formatSecondsToHoursMinutesSecound, getTrainingSession } from "./trainingSessionReducer";

const UpdateTrainingSessionContainer = props => <UpdateTrainingSession {...props}/>;

const mapStateToProps = (state, ownProps) => ({
    trainingSessions: state.trainingSessions,
    trainingSession: getTrainingSession(state, ownProps.match.params.id),
    getFormatSecondsToHoursMinutesSecound: formatSecondsToHoursMinutesSecound(getTrainingSession(state, ownProps.match.params.id)),
});


export default connect(
    mapStateToProps,
    null
)(UpdateTrainingSessionContainer);