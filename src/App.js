import './App.css';
import Aboutme from './components/Aboutme';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import data from './components/projectData'

function App() {
  console.log(data)
  return (
    <div className="App">
    <Navbar></Navbar>
    <Home></Home>
    <Skills></Skills>
    <Projects data = {data}></Projects>
    <Aboutme></Aboutme>
    </div>
  );
}

export default App;
