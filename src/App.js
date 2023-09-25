import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';
// import NotesApp from './Projects/NotesApp/NotesApp';
// import DialogBox from './Projects/DialogBox/DialogBox';
// import Testimonial from './Projects/Testimonial/Testimonial';
// import SlideToUnlock from './Projects/slide-to-unlock/SlideToUnlock';
// import SliderToGrow from './Projects/SliderToGrow/SliderToGrow';
import Store from './Projects/CourseStore/Store';
function App() {
  return (
    <div className="App">
      <Store/>
     {/* <DialogBox/> */}
     {/* <NotesApp/> */}
     {/* <SlideToUnlock/>
     <SliderToGrow/>
     <Testimonial/> */}
    </div>
  );
}

export default App;
