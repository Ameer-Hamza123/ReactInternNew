import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Routers from './components/Routes/Routes';
function App() {
  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
