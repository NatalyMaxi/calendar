import './Calendar.css';
import {format, addMonths} from 'date-fns';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import DaysGrid from '../DaysGrid/DaysGrid'
import { useState } from 'react';

const Calendar = () => {
   const date = new Date();
   const [currentDate, setCurrentDate] = useState(`${format(date, 'MMMM YYYY')}`)

   const showNextMonth = () => {
      let date = `${addMonths(currentDate, 1)}`
      setCurrentDate(`${format(date, 'MMMM YYYY')}`)

   }
   const showPreviousMonth = () => {
      let date = `${addMonths(currentDate, -1)}`
      setCurrentDate(`${format(date, 'MMMM YYYY')}`)
   }
   const showCurrentDate = () => {
      setCurrentDate(`${format(date, 'MMMM YYYY')}`)
   }
   return (
      <div className='calendar'>
         <Header />
         <Navigation
            currentDate={currentDate}
            showNextMonth={showNextMonth}
            showPreviousMonth={showPreviousMonth}
            showCurrentDate={showCurrentDate}
         />
         <DaysGrid
            currentDate={currentDate}
         />
      </div>
   );
};

export default Calendar;
