import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
function App() {
  return (
    
      <div className="App">
      <CakeContainer/>
      <IceCreamContainer/>
      <h2>aqui pra baixo é com hooks</h2>
      <HooksCakeContainer/>
      <HooksIceCreamContainer/>
      <h2>Comprando muitos bolos</h2>
      <NewCakeContainer/>
      </div>
  );
}

export default App;
