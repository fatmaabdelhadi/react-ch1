import logo from './logo.svg';
import './App.css';

function App() {

  const myname = "Fatoom"

  function greeting(name){
    if(name){
      return <h2>Hello, {name}!</h2>
    }
    return <h2>Hello, Guest!</h2>
  }

  return (
    <div className='App'>
      <h1>Hello React App</h1>
      {greeting(myname)}
    </div>
  );
}

export default App;
