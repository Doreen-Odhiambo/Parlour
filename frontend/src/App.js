 import './App.css';
 import './Home.css';
import AboutUs from './components/AboutUs';
import Client from './components/client';
import Contact from './components/Contact';
import Home from './components/Home';
import AppRouter from './Router/AppRouter';
import Services from './components/Services';



const App=() => {
  return (
    <div className='App'>
      <AboutUs />
       < Contact/>
      <Home />
      <Services />
      <Client /> 
      

    </div>
    
  );
}

export default App;
