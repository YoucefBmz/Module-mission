import "./App.css";
import "antd/dist/antd.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className='App'>
      <Routes>
        {user && (
          <>
            <Route path='/dashboard/*' element={<Dashboard />} />
          </>
        )}
        {!user && (
          <>
            <Route path='/dashboard/*' element={<Navigate to='/login' />} />
          </>
        )}
        <Route path='/' element={<Navigate to='/dashboard/' />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
