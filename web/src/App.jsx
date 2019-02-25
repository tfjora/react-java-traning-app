import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AddTrainingContainer from './AddTrainingSessionContainer';
import TrainingListContainer from './TrainingListContainer';
import UpdateTrainingSessionContainer from "./UpdateTrainingSessionContainer";
import "./app.css";

const App = () => {
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
                            <Route exact path="/"  />
                            <Route path="/add" component={AddTrainingContainer} />
                            <Route path="/list" component={TrainingListContainer} />
                            <Route path="/edit/:id" component={UpdateTrainingSessionContainer} />
                        </Switch>
                    </main>

                </>
            </Router>
        </div>
    );
}

export default App;