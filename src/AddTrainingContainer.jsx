import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddTraining from "./AddTraining";
import { createTraingRecord } from "./trainingActions";

const AddTrainingContainer = props => <AddTraining {...props} />

const mapDispatchToProps = dispatch => ({
    createTrainingRecordFn: name => dispatch(createTraingRecord(name))
});

AddTrainingContainer.propTypes = {
    createTrainingRecordFn: PropTypes.func.isRequired
}

export default connect(
    null,
    mapDispatchToProps
)(AddTrainingContainer);