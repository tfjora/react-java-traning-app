import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import AddTrainingContainer from './AddTrainingSessionContainer';
import TrainingListContainer from './TrainingListContainer';
import UpdateTrainingSessionContainer from "./UpdateTrainingSessionContainer";
import "./app.css";
import {connect} from "react-redux";

import PropTypes from "prop-types";
import { getTrainingSessions } from "./trainingSessionActions";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onRefresh = this.onRefresh.bind(this);
    }

    render() {
        return (
            <div className="app">

                <Router>
                    <>
                        <header>
                            <h1>App</h1>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/add">Add</Link>
                                </li>
                                <li>
                                    <Link to="/list">List</Link>
                                </li>
                            </ul>
                        </header>

                        <main>
                            <Switch>
                                <Route exact path="/"/>
                                <Route path="/add" component={AddTrainingContainer}/>
                                <Route path="/list"
                                render={() => (<TrainingListContainer {...this.props}/>)}
                                />
                                <Route path="/edit/:id"
                                render={props => (<UpdateTrainingSessionContainer {...props} />)}
                                />
                            </Switch>
                        </main>

                    </>
                </Router>
            </div>
        )
    }

    componentDidMount() {
        this.onRefresh();
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
)(App);
