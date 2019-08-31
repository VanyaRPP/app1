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

const App = (props) => {



  return (
    <BrowserRouter>
      <div className='wse'>
        <Header />
        <Menu />
        <div clasName="wse.content">
          <Route path='/Profil' render={() => <Profil postData={props.postData} />} />
          <Route path='/Messages' render={() => <Messages dialogData={props.dialogData} MessageData={props.MessageData} />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Setings' render={() => <Setings />} />

        </div>

      </div>
    </BrowserRouter>
  );
}
export default App;