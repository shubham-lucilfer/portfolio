
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Home></Home>
    <Projects></Projects>
    </div>
  );
}

export default App;
