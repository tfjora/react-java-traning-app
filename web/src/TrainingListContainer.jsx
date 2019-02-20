import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TrainingList from "./TrainingList";
import { getTrainingSessions } from "./trainingSessionActions";

class TrainingListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.onRefresh = this.onRefresh.bind(this);
    }

    componentDidMount() {
        this.onRefresh();
    }

    render() {
        return <TrainingList trainingSessions={this.props.trainingSessions} />
    }

    onRefresh() {
        this.props.onFetchAllTrainingSessions();
    }
}

const mapStateToProps = state => ({
    trainingSessions: state.trainingSessions
});

const mapDispatchToProps = dispatch => ({
    onFetchAllTrainingSessions: () => dispatch(getTrainingSessions())
});

TrainingListContainer.propTypes = {
    trainingSessions: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
    onFetchAllTrainingSessions: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrainingListContainer)