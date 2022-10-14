import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet, 
  useLocation,
  Link
} from "react-router-dom";

import { SignIn } from './app/auth/signIn/SignIn';
import { CreateAccount } from './app/auth/createAccount/CreateAccount';

function App() {

  return (
    <BrowserRouter>
      <Routes>
       <Route index element={<Home />} />
       <Route path="auth" element={<Auth />}>
         <Route index element={<SignIn />} />
         <Route path="createAccount" element={<CreateAccount />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

const Home = () => {
   return (
    <div>
      <Link to="auth">Login</Link>
    </div>
   )
};

const Auth = () => {

  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
     setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  },[location.pathname]);

  if (loading) {
    return <div>cargando...</div>;
  }


  return (
    <Outlet/>
  )
}

export default App;
