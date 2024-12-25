import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects'
import Resume from './components/resume';
import Contact from './components/contact';

import './App.css';


function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      
    </div>
  );
}

export default App;
