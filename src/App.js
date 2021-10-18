import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Carosel from './components/Apicall'
import {Api_call} from './components/Result'



function App() {
  return (
    <React.Fragment>
      <Header />
      <div id="Data" />
      <h1>My App</h1>
      <Footer />
    </React.Fragment>
  );
}

export default App;
