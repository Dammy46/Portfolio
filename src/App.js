import React from 'react';
import './App.scss';
import {Header, Footer, Testimonials, Work, About, Skills} from './container'
import {Navbar} from './components'
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
