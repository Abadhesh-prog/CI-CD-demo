
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
  {/* <Navbar title="Tiger" aboutText="About Tiger"/> */}
  <Navbar title="Demo" aboutText="About Demo"/>
  <TextForm heading = "Write summary"/>
  <div className="container my-3">
  </div>
  
  </>
  );
}

export default App;


