import React from 'react';
import './App.css';
import Header from './Components/Heder/Header';
import Menu from './Components/Menu/Menu';
import Profil from './Components/Profil/Profil';
import Messages from './Components/Messages/Messages';




const App = () => {
  return(
    <div className = 'wse'>
      <Header/>
      <Menu/>
      {/*<Profil/>*/}
      <Messages/>
    </div> 
  );
}
export default App;