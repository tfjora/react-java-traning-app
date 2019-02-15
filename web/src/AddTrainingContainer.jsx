import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddTraining from "./AddTraining";
import {createTrainingSession} from "./trainingActions";
import { getNextTrainingSessionId} from "./trainingReducer";

class AddTrainingContainer extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
     //   this.onRefresh()
    }

    render() {
        return (
            <AddTraining {...this.props}/>
        );
    }

   /* onRefresh() {
        this.props.getAllTrainingSessionsFn();
    }*/
}


const mapStateToProps = state => ({
    nextId: getNextTrainingSessionId(state),

   // getTrainingSessionsNameFn: userInputText => dispatch(getTrainingSessionsName(userInputText))


});

const mapDispatchToProps = dispatch => ({
    createTrainingSessionFn: (id, name, time, date) => dispatch(createTrainingSession(id, name, time, date)),
  //  getAllTrainingSessionsFn: () => dispatch(getAllTrainingSessions())
});

AddTrainingContainer.propTypes = {
    createTrainingSessionFn: PropTypes.func.isRequired,
  //  getAllTrainingSessionsFn: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTrainingContainer);