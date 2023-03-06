import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/user' element={<AuthDetails />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
