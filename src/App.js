import './App.css';
import Navbar from './components/Navbar';
import Informacion from './components/Informacion';
import Cotizador from './components/Cotizador';

function App() {
  return (
    <div className="">
      <div className="container">
        <Navbar/> 
        <Informacion/> 
        <Cotizador/>  
      </div>
    </div>
  );
}

export default App;
