import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TrainingRecordItem from "./TrainingRecordItem";
import { createTraingRecord } from "./trainingActions";

const TrainingRecordItemContainer = props => <TrainingRecordItem {...props} />

const mapDispatchToProps = dispatch => ({
    createTrainingRecordFn: name => dispatch(createTraingRecord(name))
});

TrainingRecordItemContainer.propTypes = {
    createTrainingRecordFn: PropTypes.func.isRequired
}

export default connect(
    null,
    mapDispatchToProps
)(TrainingRecordItemContainer);