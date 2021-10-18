import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Apicall from './components/Apicall';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Apicall />
      <Footer />
    </React.Fragment>
  );
}

export default App;
