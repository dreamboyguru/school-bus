import './App.css';
import Tabs from './componants/superAdmin/Tabs';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Tabs />
      {/* <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes> */}
    </div>
  );
}

export default App;
