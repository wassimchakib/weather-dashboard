import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/index';
import AirPollution from './pages/AirPollution';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="pollution" element={<AirPollution />} />
          <Route path="contact" element={<Contact />} />
          <Route exact path="/" element={<Navigate to="dashboard" />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
