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
  const [activeDay, setActiveDay] = useState()

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

  const [events, setEvents] = useState({
    '2023-02-17': {
      name: 'Сходить в кино',
      participants: [
        'Илья',
        'Оля'
      ]
    },
    '2023-02-18': {
      name: 'Пойти в гости',
      participants: [
        'Илья'
      ]
    },
    '2023-02-21': {
      name: 'Пойти в гости',
      participants: [
        'Илья'
      ],
      description: 'Принести торт'
    }
  });

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

  function aa() {
    console.log('Это новый объект', events)
  }
  function handleSubmitAddEvent(data) {
    const newEvents = { ...events, [data.date]: { name: data.name, participants: [data.participants], description: [data.description], } }
    // console.log(newEvents)
    setEvents(newEvents)
    setTimeout(aa, 500)
    closeAllPopups();
  }

  function handleDeleteEvent(data) {
    const newEvents = events
    delete newEvents[data.date]
    setEvents(newEvents)
    setTimeout(aa, 500)
    closeAllPopups();
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
