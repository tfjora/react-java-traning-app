import React from 'react';
import AddTrainingContainer from './AddTrainingContainer';

import "./app.css";
import TrainingListContainer from './TrainingListContainer';

const App = () => (
  <div className="app">
    <AddTrainingContainer />
    <TrainingListContainer />
  </div>
)

export default App;