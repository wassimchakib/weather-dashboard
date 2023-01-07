import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import store from './redux/store';
import './App.css';
import Sidebar from './components/Sidebar/index';
import AirPollution from './pages/AirPollution';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Detail from './pages/Detail';

function App() {
  return (
    <Provider store={store}>
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="pollution" element={<AirPollution />} />
          <Route path="contact" element={<Contact />} />
          <Route path="detail" element={<Detail />} />
          <Route exact path="/" element={<Navigate to="dashboard" />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
