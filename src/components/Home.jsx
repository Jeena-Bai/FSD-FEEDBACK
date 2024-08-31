import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="header">
        <h1>ICTAK Training Feedback System</h1>
      </header>

      <main className="main-content">
        <h2>Select a View</h2>
        <div className="view-selection">
          <div className="view-box" onClick={() => navigate('/participant')}>
            <h3>Participant View</h3>
            <p>Submit feedback for your training session.</p>
          </div>
          <div className="view-box" onClick={() => navigate('/training-coordinator')}>
            <h3>Training Coordinator View</h3>
            <p>Manage training courses and feedback.</p>
          </div>
          <div className="view-box" onClick={() => navigate('/iqa-dashboard')}>
          <h3>IQA View</h3>
          <p>View feedback scores and training details.</p>
        </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ICTAK. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
