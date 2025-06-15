import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
			<Route path="/home" element={<Home />} />\
			<Route path="/clients" element={<Clients />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
