import './App.css';
import './index.css';
import SigninForm from './_auth/forms/SigninForm';
import SigninForm from './_auth/forms/SignupForm';
import auth_home from './_auth/auth_main';
import rootLayout from './_root'
import {Home} from './_root/pages';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <main className="flex h-screen ">
      <Routes>
        {/*public routes*/}
        <Routes element={<auth_home />}>
        <Route path="/sign-in" element={<SigninForm />}/>
        <Route path="/sign-in" element={<SignupForm />}/>
        </Routes>
        {/*private routes*/}
        <Routes element={<rootLayout />}>
        <Route index element={<Home/>}/>
        </Routes>
        
      </Routes>
    <h1 className="text-red-700">
      Hello world!
    </h1>
    </main>
  );
}

export default App;
