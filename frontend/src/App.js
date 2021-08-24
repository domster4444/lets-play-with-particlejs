// import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';
//* #css-modules
import './css/normalize.css';
import './css/demo.css';
import './css/component.css';

import { Route } from 'react-router-dom';
//* @components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// * --pages--
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';

//? rctbtstrp compo nts
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
      <div id="st-container" className="st-container">
        <Sidebar />

        <div className="st-pusher">
          <div className="st-content">
            <div className="st-content-inner">
              <div className="main clearfix">
                <div id="st-trigger-effects">
                  {/* toolbar  */}
                  <Button data-effect="st-effect-11">
                    Scale &amp; rotate pusher
                  </Button>

                  {/* content starts here */}
                  <main className="App">
                    <Header />
                    <Route exact path="/" component={() => <Home />} />
                    <Route path="/service" component={() => <Service />} />
                  </main>

                  {/* content ends here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="./js/classie.js"></script>
        <script src="./js/sidebarEffects.js"></script>
      </Helmet>
    </>
  );
}

export default App;
