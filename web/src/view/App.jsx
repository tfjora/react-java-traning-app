import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import AddTrainingContainer from '../container/AddTrainingSessionContainer';
import TrainingListContainer from '../container/TrainingListContainer';
import UpdateTrainingSessionContainer from "../container/UpdateTrainingSessionContainer";
import Application from "./Application";
import "../css/app.css";

const App = () => {
    return (
        <div className="parent-wrapper">
            <Router>
                <>
                    <div className="wrapper">
                        <nav>
                        <ul className="list">
                            <li className="app-list-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="app-list-item">
                                <Link to="/add">Add</Link>
                            </li>
                            <li className="app-list-item">
                                <Link to="/list">List</Link>
                            </li>
                            <li className="app-list-item">
                                <Link to="/app">app</Link>
                            </li>
                        </ul>

                            <ul className="social">
                                { 1 < 0 ?
                                <li>
                                    <a href="" className="fb" >Login</a>
                                </li>
                                    :
                                <li>
                                    <a href="" className="tw" >Logout</a>
                                </li>

                                }
                            </ul>
                        </nav>
                    </div>

                    <div className="child">
                        <div>
                            <p>Test</p>
                        </div>
                        <div>
                        <main>
                            <Switch>
                                <Route exact path="/"/>
                                <Route path="/add" component={AddTrainingContainer}/>
                                <Route path="/list" component={TrainingListContainer}/>
                                <Route path="/edit/:id" component={UpdateTrainingSessionContainer}/>
                                <Route path="/app" component={Application}/>
                            </Switch>
                        </main>
                        </div>
                       <div>
                           <p>Notification</p>
                       </div>
                    </div>

                </>
            </Router>

        </div>
    )
};

export default App;
