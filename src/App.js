import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


// include 
import './Assets/css/default.min.css';

// component 
import Header from './component/headerComponent/header';
import Footer from './component/footerComponent/footer';
import HomePage from './component/pages/homePage';
import HomePage2 from './component/pages/homePage2';
import HomePage3 from './component/pages/homepage3';

function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Homepage2' component={HomePage2} />
        <Route exact path='/Homepage3' component={HomePage3} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
