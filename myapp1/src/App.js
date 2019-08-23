import React from 'react';
import './App.css';
import Header from './Components/Heder/Header';
import Menu from './Components/Menu/Menu';
import Profil from './Components/Profil/Profil';
import Messages from './Components/Messages/Messages';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Setings from './Components/Setings/Setings';
import { BrowserRouter, Route } from "react-router-dom"





const App = () => {
  return (
    <BrowserRouter>
      <div className='wse'>
        <Header />
        <Menu />
        <div clasName="wse.content">
          <Route path='/Profil' component={Profil} />
          <Route path='/Messages' component={Messages} />
          <Route path='/Music' component={Music} />
          <Route path='/News' component={News} />
          <Route path='/Setings' component={Setings} />
          
        </div>

      </div>
    </BrowserRouter>
  );
}
export default App;