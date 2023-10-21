import logo from './logo.svg';
import './App.css';
import WelcomeFc from './components/WelcomeFc';
import Welcome from './components/Welcome';
import Product from './components/Product';

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
      <WelcomeFc name="Fatma" age="21" title="js dev" />
      <WelcomeFc name="Aliaa" age="20" title="emb dev" />
      <Welcome name="Ganna" age="22" title="react dev" />
      <Product title="iPhone" description="lorem ipsum" price="7000" />
      <Product title="iPhone" description="lorem ipsum" price="7000" />
      <Product title="iPhone" description="lorem ipsum" price="7000" />
    </div>
  );
}

export default App;
