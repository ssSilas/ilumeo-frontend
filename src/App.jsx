import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './components/auth/Authentication';
import RegisterPoint from './components/register-point/RegisterPoint';

function App() {
  function setCodeUser(userToken) {
    sessionStorage.setItem('usercode', JSON.stringify(userToken));
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Authentication setCodeUser={setCodeUser} />} />
        <Route path="/register-point" element={<RegisterPoint />} />
      </Routes>
    </div>
  );
}

export default App;
