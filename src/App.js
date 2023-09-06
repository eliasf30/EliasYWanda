import './App.css';
import Navbar from './navbar/navbar';
import Carrusel from './carrusel/carrusel';
import Hero from './hero/hero'
import Text from './text/text';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      
      <Text/>
      <Carrusel/>
      

    </div>
  );
}

export default App;
