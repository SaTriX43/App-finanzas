import './App.css';
import Encabezado from './componentes/Encabezado';
import Principal from './componentes/Principal';
import { ManejarClickProvider } from './contextos/ManejarClick';
import { ValorMonetarioProvider } from './contextos/ValorMonetario';

function App() {
  return (
    <ManejarClickProvider>
    <ValorMonetarioProvider>
    <div className="App">
      <Encabezado/> 
      <Principal/>  

    </div>
    </ValorMonetarioProvider>
    </ManejarClickProvider>
  );
}

export default App;
