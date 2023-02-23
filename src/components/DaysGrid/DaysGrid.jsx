import { format, addDays, startOfMonth, startOfWeek, endOfMonth, endOfWeek, differenceInDays, isEqual, isSameDay } from 'date-fns';
import DayCell from '../DayCell/DayCell';
import './DaysGrid.css';
import { ru } from 'date-fns/locale'

const DaysGrid = (props) => {
   /**
    * Возвращает дату с днем недели, с которой стартует месяц заданной даты 
    */
   const monthStart = startOfMonth(new Date(props.currentDate)); //среда
   /**
    * Возвращает дату начала недели (дата, выпадает на воскресенье, так как локализация английская)
    */
   const startDate = startOfWeek(monthStart);  //29 января
   /**
    * Возвращает даты последнего дня недели, в которой находится указанная дата
    */
   const lastDay = endOfWeek(endOfMonth(monthStart));
   /**
    * Массив всех дат,  входящих в полные недеи,  сосмещением на единицу, чтоб перевести к русской недели
    */
   const daysArray = [...Array(differenceInDays(lastDay, startDate) + 1)]
      .map((el, i) => addDays(startDate, i + 1))

   return (
      <section className='content'>
         {
            daysArray.map((day, index) => {
               let formattedDayWeek = format(new Date(day), 'EEEE', { locale: ru })
               let formateDay = format(new Date(day), 'd')
               let todayEvent = {}
               for (let key in props.events) {
                  if (isSameDay(day, new Date(key))) {
                     todayEvent.name = props.events[key].name
                     todayEvent.participants = props.events[key].participants.map(i => i)
                     todayEvent.description = props.events[key].description
                  }
               }
               if (index < 7) {
                  return (
                     <DayCell
                        isActive={isEqual(props.activeDay, day)}// Совпадают ли указанные даты
                        onEditData={props.onEditData}
                        dateCrid={formattedDayWeek + ', ' + formateDay}
                        key={day}
                        day={day}
                        todayEvent={todayEvent}
                     />
                  )
               }
               return (
                  <DayCell
                     isActive={isEqual(props.activeDay, day)}
                     onEditData={props.onEditData}
                     dateCrid={formateDay}
                     key={day}
                     day={day}
                  
                     todayEvent={todayEvent}
                  />
               )
            })
         }
      </section>
   );
};

export default DaysGrid;