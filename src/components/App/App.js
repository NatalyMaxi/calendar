import React, { useState, useEffect, useCallback } from 'react';
import { format, } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartPage from '../StartPage/StartPage';
import Calendar from '../Calendar/Calendar';
import PopupAddEvent from '../PopupAddEvent/PopupAddEvent';
import PopupAddQuicklyEvent from '../PopupAddQuicklyEvent/PopupAddQuicklyEvent';

function App() {
  const [isPopupAddEventOpen, setIsPopupAddEventOpen] = useState(false);
  const [isPopupAddQuicklyEventOpen, setIsPopupAddQuicklyEventOpen] = useState(false);
  const [activeDay, setActiveDay] = useState();
  const [events, setEvents] = useState(JSON.parse(localStorage.getItem('events')) || {});
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
  );

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  function handleClickAddEvent(day, coordinates) {
    setActiveDay(day)
    setCoordinates(coordinates)
    setIsPopupAddEventOpen(true);
  }

  function handleClickAddQuicklyEvent(coordinates) {
    setCoordinates(coordinates)
    setIsPopupAddQuicklyEventOpen(true);
  }

  function closeAllPopups() {
    setActiveDay(false)
    setIsPopupAddEventOpen(false)
    setIsPopupAddQuicklyEventOpen(false)
  }

  function handleSubmitAddEvent(data) {
    const newEvents = { ...events, [data.date]: { name: data.name, participants: [data.participants], description: [data.description], date: data.date } }
    setEvents(newEvents)
    closeAllPopups()
  }

  function handleSubmitAddEventQuickly(data) {
    const newEvents = { ...events, [format(new Date(), 'yyyy-MM-d', { locale: ru })]: { name: data.name, participants: [], description: null, date: data.date } }
    setEvents(newEvents)
    closeAllPopups();
  }

  function handleDeleteEvent(data) {
    const newEvents = events
    delete newEvents[data.date]
    setEvents(newEvents)
    closeAllPopups()
  }

  const handlePopupСlosingByEsc = useCallback((evt) => {
    if (evt.keyCode === 27) {
      closeAllPopups();
    }
  }, []);

  useEffect(() => {
    if (isPopupAddEventOpen || isPopupAddQuicklyEventOpen) {
      document.addEventListener('keydown', handlePopupСlosingByEsc);
    } else {
      document.removeEventListener('keydown', handlePopupСlosingByEsc);
    }
  }, [isPopupAddEventOpen, isPopupAddQuicklyEventOpen, handlePopupСlosingByEsc])

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
            activeDay={activeDay}
            events={events}
          />}
        />
      </Routes>

      <PopupAddEvent
        isOpen={isPopupAddEventOpen}
        onClose={closeAllPopups}
        coordinates={coordinates}
        day={activeDay}
        onAddEvent={handleSubmitAddEvent}
        onDeleteEvent={handleDeleteEvent}
        events={events}
        onKeyDown={handlePopupСlosingByEsc}
      />
      <PopupAddQuicklyEvent
        isOpen={isPopupAddQuicklyEventOpen}
        onClose={closeAllPopups}
        coordinates={coordinates}
        onAddEvent={handleSubmitAddEventQuickly}
        onPopupСlosingByEsc={handlePopupСlosingByEsc}
      />
    </div>
  );
}

export default App;
