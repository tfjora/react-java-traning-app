import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TrainingList from "./TrainingList";
import TrainingSession from "./TrainingSession";
import {fetchTrainingSession} from "./trainingActions";

class TrainingListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onRefresh = this.onRefresh.bind(this);
    }

    componentDidMount() {
        this.onRefresh();
    }

    render() {
        const {trainingSessions} = this.props;
        return <TrainingList
            trainingSessions={trainingSessions}
        />
    }

    onRefresh() {
        this.props.onFetchTrainingSessions();
    }
}

const mapStateToProps = state => ({
    trainingSessions: state.trainingSessions
});

const mapDispatchToProps = dispatch => ({
    onFetchTrainingSessions: () => dispatch(fetchTrainingSession())
});

TrainingListContainer.propTypes = {
    trainingSessions: PropTypes.arrayOf(PropTypes.instanceOf(TrainingSession)).isRequired,
    onFetchTrainingSessions: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainingListContainer)