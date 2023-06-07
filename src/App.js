import React from 'react';
import './App.css';
import NavBar from './components/NavBar/navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';
import { Originals, Actions, Horror,Comedy , Romantic, Documentaries} from './urls';

function App() {
  return (
    <div>

    <NavBar/>
    <Banner/>
    <Rowpost url={Originals} title="Netflix Originals"/>
    <Rowpost url={Actions} title="Action" isSmall />
    <Rowpost url={Horror} title="Horror" isSmall />
    <Rowpost url={Comedy} title="Comedy" isSmall />
    <Rowpost url={Romantic} title="Romantic" isSmall />
    <Rowpost url={Documentaries} title="Documentary" isSmall />

    

    

    </div>
   
  )
}

export default App;
