import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import Calendar from '../Calendar/Calendar';

const App = () => {
  return (
    <div className='page'>
      <Routes>
        <Route exact path='/'
          element={<StartPage />}
        />
        <Route path='/calendar'
          element={<Calendar />}
        />
      </Routes>
    </div>
  );
}

export default App;
