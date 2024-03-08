import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './Dashboard';
import CourseDetails from './pages/CourseStore/CourseDetails';
import CourseList from './pages/CourseList';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Poll from './pages/DynamicPoll';
import Slider from './pages/component/Slider';
function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Dashboard />} />
        {/* <Route path="/notes" element={<NotesApp />} /> */}
        <Route path="/poll" element={<Poll />} />
        <Route path="/course-list" element={<CourseList/>} />
        <Route path="/course-details" element={<CourseDetails/>} />
        <Route path="/poll" element={<Poll/>} />
        <Route path="/slider" element={<Slider/>} />
        
        {/* <Route path="/learning" element={<Store />} /> */}
      </Routes>
    </div>
  );
}

export default App;
