import { format, addDays, startOfMonth, startOfWeek } from 'date-fns';
import DayCell from '../DayCell/DayCell';
import './DaysGrid.css';

const DaysGrid = (props) => {
   const monthStart = startOfMonth(props.currentDate);
   const startDate = startOfWeek(monthStart);
   const arrayDaysWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',]
   const daysArray = [...Array(42)].map((el, i) => addDays(startDate, i + 1))
   const newDaysArray = Object(daysArray)

   return (
      <section className='content'>
         {
            newDaysArray.map((el, index) => {
               let formattedDate = format(el, "D")
               if (index < 7) {
                  // let dayWeek = (format(dateFns.addDays(firstDayOfWeek, index +1), "dddd")) //английский язык
                  return <DayCell num={formattedDate} dayWeek={arrayDaysWeek[index] + ', '} key={index} />
                  // return <DayCell num={formattedDate} dayWeek={dayWeek + ', '} key={index} /> //английский язык
               }
               return <DayCell num={formattedDate} dayWeek={''} key={index} />
            })
         }
      </section>
   );
};

export default DaysGrid;