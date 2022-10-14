import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { SignIn } from './app/auth/signIn/SignIn';
import { CreateAccount } from './app/auth/createAccount/CreateAccount';


function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<SignIn />} />
        <Route path="createAccount" element={<CreateAccount />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
