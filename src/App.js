import './App.css';
import AdminTabs from './componants/admin/Tabs';
import Tabs from './componants/superAdmin/Tabs';

function App() {
  const type = 'superAdmin';
  return (
    <div className="App">
      {type === 'admin' && <AdminTabs />}
      {type === 'superAdmin' && <Tabs />}
      {/* <PointsForm /> */}
      {/* <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes> */}
    </div>
  );
}

export default App;
