import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ParticipantForm from './components/ParticipantForm';
import IQADashboard from './components/IQADashboard';
import TrainingCoordinator from './components/TrainingCoordinator';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/participant" element={<ParticipantForm />} />
        <Route path="/iqa-dashboard" element={<IQADashboard />} />
        <Route path="/training-coordinator" element={<TrainingCoordinator />} />
      </Routes>
   
  );
}

export default App;
