import './Calendar.css';
import dateFns from "date-fns";
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

const Calendar = () => {
   const data = new Date();
   const [currentDate, setCurrentDate] = useState(`${dateFns.format(data, "MMMM YYYY")}`)

   const showNextMonth = () => {
      let data = `${dateFns.addMonths(currentDate, 1)}`
      setCurrentDate(`${dateFns.format(data, "MMMM YYYY")}`)

   }
   const showPreviousMonth = () => {
      let data = `${dateFns.addMonths(currentDate, -1)}`
      setCurrentDate(`${dateFns.format(data, "MMMM YYYY")}`)
   }
   const showCurrentDate = () => {
      setCurrentDate(`${dateFns.format(data, "MMMM YYYY")}`)
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
      </div>
   );
};

export default Calendar;
