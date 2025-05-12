import './App.css'
import LoginPage from './pages/auth/LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SignUpPage from './pages/auth/SignUpPage';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './commonstyles/variables.css';
import TopNavBar from './components/navbar/TopNavBar';
import HomePage from './pages/home/HomePage';
import './commonstyles/commonclass.css'
import ViewQuery from './pages/viewquery/ViewQuery';
import CreateQuery from './pages/createquery/CreateQuery';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  
import 'primereact/resources/primereact.min.css';                  
import 'primeicons/primeicons.css';                               
import 'primeflex/primeflex.css';    
import Sidebar from './components/sidebar/Sidebar';
import MentorDasboard from './pages/mentordashboard/MentorDasboard';
import { CommonProvider } from './contextapi/common'
import QueryFeeds from './pages/queryfeeds/QueryFeeds';
import ProtectedRoutes from './shared/authShared/protectedRoutes';
import DefaultRoutes from './shared/authShared/DefaultRoutes';
import Classes from './pages/classes/Classes';
import UserCertificates from './pages/usercertificate/UserCertificates';
import Testimonial from './pages/testimonial/Testimonial';
import InterviewTasks from './pages/interviewtask/InterviewTasks';
import Task from './pages/task/Task';
import ProfilePage from './pages/profilepage/ProfilePage';
import ToastMessage from './components/toastMessage/ToastMessage';




function App() {
 

  return (  
    <Router>
      <CommonProvider>
      <ToastMessage />
        <MainLayout/>
      </CommonProvider>
    </Router>
  )
}

function MainLayout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"];

  return (
      <>
      {!hideNavbarRoutes.includes(location.pathname) && <Sidebar />}
      <div className="content">
        {!hideNavbarRoutes.includes(location.pathname) && <TopNavBar />}
        <Routes>

          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path='/register' element={<SignUpPage />} />

          {/* Default Redirect Route */}
          <Route path="/" element={<DefaultRoutes />} />

           {/* Student-Only Routes */}
           <Route element={<ProtectedRoutes allowedRoles={["student"]} />}>
            <Route path='/home' element={<HomePage />} />
            <Route path="/raiseQuery" element={<CreateQuery />} />
            <Route path='/class' element={<Classes />} />
            <Route path='/certificate' element={<UserCertificates />} />
            <Route path='/testimonial' element={<Testimonial />} />
            <Route path='/interviewTask' element={<InterviewTasks />} />
            <Route path='/task' element={<Task />} />
          </Route>

          {/* Mentor-Only Routes */}
          <Route element={<ProtectedRoutes allowedRoles={["mentor"]} />}>
            <Route path="/mentorDashboard" element={<MentorDasboard />} />
            <Route path='/queryFeeds' element={<QueryFeeds />} />
          </Route>

           {/* Common Routes */}
            <Route element={<ProtectedRoutes allowedRoles={["mentor", "student"]} />}>
              <Route path="/MyAccount" element={<ProfilePage />} />
              <Route path='/query/:id' element={<ViewQuery />} />
            </Route>
  
      </Routes>
      </div>
      </>
  );
}

export default App
