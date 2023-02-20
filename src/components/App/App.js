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

  const [coordinates, setCoordinates] = useState(
    {
      x: 0,
      y: 0,
      width: 0,
      top: 0,
      right: 0,
      left: 0,
      height: 0,
      bottom: 0,

    }
  )

  function handleClickAddEvent(coordinates) {
    setCoordinates(coordinates)
    setIsPopupAddEventOpen(true);
  }

  function handleClickAddQuicklyEvent(coordinates) {
    setCoordinates(coordinates)
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
            coordinates={coordinates}
          />}
        />
      </Routes>
      <PopupAddEvent
        isOpen={isPopupAddEventOpen}
        onClose={closeAllPopups}
        coordinates={coordinates}
      />
      <PopupAddQuicklyEvent
        isOpen={isPopupAddQuicklyEventOpen}
        onClose={closeAllPopups}
        coordinates={coordinates}
      />
    </div>
  );
}

export default App;
