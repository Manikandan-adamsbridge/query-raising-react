import './App.css'
import LoginPage from './pages/auth/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './pages/auth/SignUpPage';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './commonstyles/variables.css';
import TopNavBar from './components/navbar/TopNavBar';
import HomePage from './pages/home/HomePage';
import './commonstyles/commonclass.css'
import ViewQuery from './pages/viewquery/ViewQuery';
import CreateQuery from './pages/createquery/CreateQuery';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.min.css';                  
import 'primeicons/primeicons.css';                               
import 'primeflex/primeflex.css';    
import Sidebar from './components/sidebar/Sidebar';
import MentorDasboard from './pages/mentordashboard/MentorDasboard';


function App() {
 

  return (
    // <PrimeReactProvider>
    <Router>
      <MainLayout/>
    </Router>
    // </PrimeReactProvider>
  )
}

function MainLayout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/signup"];

  return (
      <>
      <Sidebar />
      <div className="content">
        {!hideNavbarRoutes.includes(location.pathname) && <TopNavBar />}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<SignUpPage />} />
          <Route path='/query' element={<ViewQuery />} />
          <Route path='/raiseQuery' element={<CreateQuery />} />
          <Route path='/mentorDashboard' element={<MentorDasboard />} />
      </Routes>
      </div>
      </>
  );
}

export default App
