import { format, addDays, startOfMonth, startOfWeek, endOfMonth, endOfWeek, differenceInDays } from 'date-fns';
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
            daysArray.map((el, index) => {
               let formattedDayWeek = format(new Date(el), 'EEEE', { locale: ru })
               let formateDay = format(new Date(el), 'd')
               if (index < 7) {
                  return <DayCell onEditData={props.onEditData} dateCrid={formattedDayWeek.charAt(0).toUpperCase() + formattedDayWeek.slice(1) + ', ' + formateDay} key={index} />
               }
               return <DayCell onEditData={props.onEditData} dateCrid={formateDay} key={index} />
            })
         }
      </section>
   );
};

export default DaysGrid;