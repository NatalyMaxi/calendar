import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import Calendar from '../Calendar/Calendar';
import PopupAddEvent from '../PopupAddEvent/PopupAddEvent';
import PopupAddQuicklyEvent from '../PopupAddQuicklyEvent/PopupAddQuicklyEvent';


function App() {
  const [isPopupAddEventOpen, setIsPopupAddEventOpen] = useState(false);
  const [isPopupAddQuicklyEventOpen, setIsPopupAddQuicklyEventOpen] = useState(false);


  function handleClickAddEvent() {
    setIsPopupAddEventOpen(true);
  }

  function handleClickAddQuicklyEvent() {
    setIsPopupAddQuicklyEventOpen(true);
  }

  function closeAllPopups() {
    setIsPopupAddEventOpen(false)
    setIsPopupAddQuicklyEventOpen(false)
  }
  return (
    <div className='page'>
      <Routes>
        <Route path='/'
          element={<StartPage />}
        />
        <Route path='calendar'
          element={<Calendar
            onEditData={handleClickAddEvent}
            onEditQuicklyData={handleClickAddQuicklyEvent}
          />}
        />
      </Routes>
      <PopupAddEvent
        isOpen={isPopupAddEventOpen}
        onClose={closeAllPopups}
      />
      <PopupAddQuicklyEvent
        isOpen={isPopupAddQuicklyEventOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
