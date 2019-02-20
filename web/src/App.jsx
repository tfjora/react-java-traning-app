import React from 'react';
import AddTrainingContainer from './AddTrainingSessionContainer';
import TrainingListContainer from './TrainingListContainer';

import "./app.css";

const App = () => (
  <div className="app">
    <AddTrainingContainer />
    <TrainingListContainer />
  </div>
)

export default App;