import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Home></Home>
    <Skills></Skills>
    <Projects></Projects>
    </div>
  );
}

export default App;
