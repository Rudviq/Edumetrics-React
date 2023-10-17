import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNav from './pages/TopNav';
import Dropdown from './pages/Dropdown';
import StudentDashboard from './pages/StudentDashboard';
import StudentProfile from './pages/StudentProfile';
import QualityAssuranceOfficerDashboard from './pages/QA';
import ContactUs from './pages/ContactUs';
import ServicesComponent from './pages/Services';
import AboutUs from './pages/AboutUs';
import InstructorDashboard from './pages/Instructor';
import InstructorProfile from './pages/InstructorProfile';
import ProgramCordinator from './pages/ProgramCordinator';
import Communication from './pages/Communication';
import PointOfContact from './pages/PointOfContact';
import Report from './pages/Reports';
import AdminDashboard from './pages/Admin';
import { StudentPage } from './pages/StudentPage';
import { HomePage } from './pages/HomePage';
import { SinupPage } from './pages/SinupPage';
import { LoginPage } from './pages/LoginPage';
import { ForgotPage } from './pages/ForgotPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Listen for changes to the URL and update currentPath
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    // Set up the event listener
    window.addEventListener('popstate', handlePathChange);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  let currentPage;
  switch (currentPath) {
    case '/login':
        currentPage = <LoginPage />;
        break;
    case '/forgot':
        currentPage = <ForgotPage  />;
        break;
    case '/sinup':
      currentPage = <SinupPage  />;
      break;
    case '/home':
      currentPage = <HomePage/>;
      break;
    case '/student':
      currentPage = <StudentPage />;
      break;
    case '/student_profile':
      currentPage = <StudentProfile />;
      break;
    case '/instructor':
      currentPage = <InstructorDashboard />;
      break;
    case '/instructorProf':
      currentPage = <InstructorProfile />;
      break;
    case '/services':
      currentPage = <ServicesComponent/>;
      break;
    case '/aboutus':
      currentPage = <AboutUs/>;
      break;
    case '/qa':
        currentPage = <QualityAssuranceOfficerDashboard />;
        break;
    case '/contact_us':
      currentPage = <ContactUs />;
      break;  
    case '/pc':
      currentPage = <ProgramCordinator />;
      break;
    case '/communication':
      currentPage = <Communication/>;
      break;
    case '/pointOfContact':
      currentPage = <PointOfContact/>;
      break;
    case '/report':
      currentPage = <Report/>;
      break;
    case '/admin':
        currentPage = <AdminDashboard />;
        break;
    default:
        currentPage = <LoginPage />;
}

  // switch (currentPath) {
  //   // case '/student_dashboard':
  //   //   currentPage = <StudentDashboard />;
  //   //   break;
  //   // case '/student_profile':
  //   //   currentPage = <StudentProfile />;
  //   //   break;
  //   case '/qa':
  //     currentPage = <QualityAssuranceOfficerDashboard />;
  //     break;
  //   case '/contact_us':
  //     currentPage = <ContactUs />;
  //     break;
  //   case '/services':
  //     currentPage = <ServicesComponent/>;
  //     break;
  //   case '/aboutus':
  //     currentPage = <AboutUs/>;
  //     break;
  //   default:
  //     currentPage = <QualityAssuranceOfficerDashboard />;
  // }

  // switch (currentPath) {
  //   case '/instructor':
  //     currentPage = <InstructorDashboard />;
  //     break;
  //   case '/instructorProf':
  //     currentPage = <InstructorProfile />;
  //     break;
  //   case '/services':
  //     currentPage = <ServicesComponent/>;
  //     break;
  //   case '/aboutus':
  //     currentPage = <AboutUs/>;
  //     break;
  //   default:
  //     currentPage = <InstructorDashboard />;
  // }

  // switch (currentPath) {
  //   case '/pc':
  //     currentPage = <ProgramCordinator />;
  //     break;
  //   case '/communication':
  //     currentPage = <Communication/>;
  //     break;
  //   case '/pointOfContact':
  //     currentPage = <PointOfContact/>;
  //     break;
  //   case '/report':
  //     currentPage = <Report/>;
  //     break;
  //   default:
  //     currentPage = <ProgramCordinator />;
  // }

  // switch (currentPath) {
  //   case '/admin':
  //     currentPage = <AdminDashboard />;
  //     break;
  //   // case '/communication':
  //   //   currentPage = <Communication/>;
  //   //   break;
  //   // case '/pointOfContact':
  //   //   currentPage = <PointOfContact/>;
  //   //   break;
  //   // case '/report':
  //   //   currentPage = <Report/>;
  //   //   break;
  //   default:
  //     currentPage = <AdminDashboard />;
  // }
  return (
    <Router>
      <div>
        {currentPage}
      </div>
    </Router>
  );
}

export default App;
