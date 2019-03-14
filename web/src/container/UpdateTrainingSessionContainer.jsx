import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {formatSecondsToHoursMinutesSecound, getTrainingSession} from "../reducer/trainingSessionReducer";
import UpdateTrainingSession from "../view/UpdateTrainingSession";
import {getTrainingSessions, updateTrainingSession} from "../actions/trainingSessionActions";

class UpdateTrainingSessionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onRefresh = this.onRefresh.bind(this);
        this.state = {hasData: false};
    }

    componentWillMount() {
        this.onRefresh();
    }

    onRefresh() {
        this.setState(() => {
            if (this.props.trainingSessions == null || this.props.trainingSessions.length === 0) {
                return {hasData: false};
            } else {
                return {hasData: true};
            }
        });
    }

    render() {
        let myComponent;
        if (this.state.hasData) {
            myComponent = <UpdateTrainingSession {...this.props}/>
        } else {
            myComponent = (
                <div>
                    <h1>
                        Did not found your Training Sessions.
                    </h1>
                </div>
            );
        }
        return (
            <div>
                {myComponent}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    trainingSessions: state.trainingSessions,
    trainingSession: getTrainingSession(state, props.match.params.id),
    getFormatSecondsToHoursMinutesSecound: formatSecondsToHoursMinutesSecound(getTrainingSession(state, props.match.params.id)),
});


const mapDispatchToProps = dispatch => ({
    onFetchAllTrainingSessions: () => dispatch(getTrainingSessions()),
    updatedTrainingSessionFn: trainingSession => dispatch(updateTrainingSession(trainingSession)),
});

UpdateTrainingSessionContainer.propTypes = {
    trainingSessions: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
    onFetchAllTrainingSessions: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateTrainingSessionContainer);