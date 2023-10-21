import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

function App() {

  // const myname = "Fatoom"

  // function greeting(name){
  //   if(name){
  //     return <h2>Hello, {name}!</h2>
  //   }
  //   return <h2>Hello, Guest!</h2>
  // }

  return (
    <div className='App'>
      <Welcome />
    </div>
  );
}

export default App;
