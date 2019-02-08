import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TrainingList from "./TrainingList";
import TrainingSession from "./TrainingSession";

const TrainingListContainer = props => <TrainingList {...props} />

const mapStateToProps = state => ({
    trainingSessions: state.trainingSessions
});

TrainingListContainer.propTypes = {
    trainingSessions: PropTypes.arrayOf(PropTypes.instanceOf(TrainingSession).isRequired)
}

export default connect(
    mapStateToProps,
    null
)(TrainingListContainer)