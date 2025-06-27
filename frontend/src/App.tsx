import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Successfullreg from './pages/Successfulreg';
import Dashboard from './pages/dashboard';
import About from './pages/Aboutpage';
import Preferences from './pages/Preferences';
function AppLayout() {
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/register','/successfullreg'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {!shouldHideNavbar && <Navbar />}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         <Route path='/successfullreg' element={<Successfullreg/>}/>
         <Route path='/takenotes' element={<Dashboard/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/settings' element={<Preferences/>}/>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
