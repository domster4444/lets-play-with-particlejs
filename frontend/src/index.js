import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

//* --cursor pointer
// import CustomCursor from 'custom-cursor-react';
// import 'custom-cursor-react/dist/index.css';

import AnimatedCursor from 'react-animated-cursor';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <CustomCursor
        targets={['.link', '.your-css-selector']}
        customClass="custom-cursor"
        dimensions={30}
        fill="#FFF"
        smoothness={{
          movement: 0.1,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.5}
      /> */}

      <AnimatedCursor
        innerSize={8}
        outerSize={25}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}
      />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
