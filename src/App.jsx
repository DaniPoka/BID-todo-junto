import './App.css';
import { Component } from 'react';
import Datos from './components/datos';


class App extends Component {    
  render() {        
      return (            
        <>
        
        <Datos className="Jane"  apellido= "Doe"   nombre= "Jane"  edad= {43} color='Black'  />
        
        
        
        <Datos  apellido= "Smith"   nombre= "John" edad= {88} color='Brown' />
        
        </>

        
      );    
  }
}
export default App;
