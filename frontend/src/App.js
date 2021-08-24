// import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';
//* @components
import Header from './components/Header/Header';
// * --pages--
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
function App() {
  return (
    <div className="App">
      <Header />
      {/* public route  */}
      <Route exact path="/" component={() => <Home />} />

      <Route path="/service" component={() => <Service />} />
      {/* private  route  */}
    </div>
  );
}

export default App;
