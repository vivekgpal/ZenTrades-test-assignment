import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './DashboardPage';

import App from "./App"
function Login(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
    )
}

export default Login