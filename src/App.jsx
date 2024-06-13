import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Cert from './components/Cert';
import Script from './components/Script';
import Bts from './components/Bts';
import Monologue from './components/Monologue';
import Scavenger from './components/Scavenger';
import FilmCredit from './components/FilmCredit';

function App() {
  return (
    <div className="bg-image">
      <div className="content">
        <Hero />
        <Script />
        <Bts />
        <Cert />
        <Monologue />
        <Scavenger />
        <FilmCredit />
        <Footer />
      </div>
    </div>
  );
}

export default App;
