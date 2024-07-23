import logo from './logo.svg';
import './App.css';
import Tabs from './componants/superAdmin/Tabs';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './componants/superAdmin/Dashboard';

function App() {
  return (
    <div className="App">
      <Tabs />
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
