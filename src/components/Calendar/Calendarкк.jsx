import './Calendar.css';
import { format, addMonths } from 'date-fns';
import { ru } from 'date-fns/locale'
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import DaysGrid from '../DaysGrid/DaysGrid'
import { useState } from 'react';


const Calendar = (props) => {
   const [currentDate, setCurrentDate] = useState(`${format(new Date(), 'MMMM yyyy', { locale: ru })}`)
   
   console.log(currentDate)

   const showNextMonth = () => {
      setCurrentDate(`${format(addMonths(new Date(currentDate), 1), 'MMMM yyyy')}`)

   }
   const showPreviousMonth = () => {
      setCurrentDate(`${format(addMonths(new Date(currentDate), -1), 'MMMM yyyy')}`)
   }

   const showCurrentDate = () => {
      setCurrentDate(`${format(new Date(), 'MMMM yyyy', { locale: ru })}`)
   }

   return (
      <div className='calendar'>
         <Header
            popup={props.popup}
            onEditQuicklyData={props.onEditQuicklyData}
         />
         <Navigation
            currentDate={currentDate}
            showNextMonth={showNextMonth}
            showPreviousMonth={showPreviousMonth}
            showCurrentDate={showCurrentDate}
         />
         <DaysGrid
            currentDate={currentDate}
            onEditData={props.onEditData}
         />
      </div>
   );
};

export default Calendar;
