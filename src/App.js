import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';
import { Routes, Route } from 'react-router-dom';
import NotesApp from './pages/NotesApp/NotesApp';
import Store from './pages/CourseStore/Store';
import Navbar from './components/Navbar';
import Dashboard from './Dashboard';
import CourseDetails from './pages/CourseStore/CourseDetails';
import CourseList from './pages/CourseList';
function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/notes" element={<NotesApp />} />
        <Route path="/course-list" element={<CourseList/>} />
        <Route path="/course-details" element={<CourseDetails/>} />

        {/* <Route path="/learning" element={<Store />} /> */}
      </Routes>
    </div>
  );
}

export default App;
