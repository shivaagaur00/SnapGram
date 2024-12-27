import './App.css';
import './index.css';
import SigninForm from './_auth/forms/SignIn';
import SignupForm from './_auth/forms/SignUp';
import AuthHome from './_auth/auth_main';
import Home from './_root/pages/home';
import { Routes, Route } from 'react-router-dom';
import User from './_root/pages/User';
import About from './Components/about';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="Authentication" element={<AuthHome />}>
          <Route path="sign-up" element={<SignupForm />} />
          <Route path="sign-in" element={<SigninForm />} />
        </Route>
        <Route path='/user'element={<User></User>}>
        </Route>
      </Routes>
    </main>
  );
}

export default App;
