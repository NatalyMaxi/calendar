import './Calendar.css';
import { format, addMonths } from 'date-fns';
import { ru } from 'date-fns/locale';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import DaysGrid from '../DaysGrid/DaysGrid';
import { useState } from 'react';

const Calendar = (props) => {
   const [currentDate, setCurrentDate] = useState(new Date());

   const showNextMonth = () => {
      setCurrentDate(addMonths(new Date(currentDate), 1))
   }

   const showPreviousMonth = () => {
      setCurrentDate(addMonths(new Date(currentDate), -1))
   }

   const showCurrentDate = () => {
      setCurrentDate(new Date())
   }

   return (
      <section className='calendar'>
         <Header
            popup={props.popup}
            onEditQuicklyData={props.onEditQuicklyData}
            events={props.events}
         />
         <Navigation
            currentDate={format(currentDate, 'LLLL yyyy', { locale: ru })}
            showNextMonth={showNextMonth}
            showPreviousMonth={showPreviousMonth}
            showCurrentDate={showCurrentDate}
            events={props.events}
         />
         <DaysGrid
            currentDate={currentDate}
            onEditData={props.onEditData}
            activeDay={props.activeDay}
            events={props.events}
         />
      </section>
   );
};

export default Calendar;