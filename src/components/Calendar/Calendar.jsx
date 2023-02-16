import './Calendar.css';
import dateFns from "date-fns";
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import DaysGrid from '../DaysGrid/DaysGrid'
import { useState } from 'react';

const Calendar = () => {
   const date = new Date();
   const [currentDate, setCurrentDate] = useState(`${dateFns.format(date, "MMMM YYYY")}`)

   const showNextMonth = () => {
      let date = `${dateFns.addMonths(currentDate, 1)}`
      setCurrentDate(`${dateFns.format(date, "MMMM YYYY")}`)

   }
   const showPreviousMonth = () => {
      let date = `${dateFns.addMonths(currentDate, -1)}`
      setCurrentDate(`${dateFns.format(date, "MMMM YYYY")}`)
   }
   const showCurrentDate = () => {
      setCurrentDate(`${dateFns.format(date, "MMMM YYYY")}`)
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
