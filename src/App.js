import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Articles from './components/Articles';
import React from 'react'
// import Counter from './components/Counter';

function App() {
  const clients = [
    {
      name: 'Josep',
      drink: 'Monster',
      isPremium: true
    },
    {
      name: 'Cristian',
      drink: 'Beer',
      isPremium: false
    },
    {
      name: 'Marina',
      drink: 'Bitter Kas',
      isPremium: true
    }
  ]

  return (
    <>
      <h1>Hello world</h1>
      <Navbar />
      <Header client={clients[0]} />
      <Header client={clients[1]} />
      <Header client={clients[2]} />
      <Articles />
    </>
  );
}

export default App;
