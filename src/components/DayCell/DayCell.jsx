import './DayCell.css';
import { updateCoordinates } from '../../utils/utils';

const DayCell = (props) => {
   const isActive = props.isActive ? 'day-element_active' : '';

   function handleClick(evt) {
      const element = evt.currentTarget //элемент, на котором произошло событие клика
      const newCoordinates = updateCoordinates(element)
      props.onEditData(props.day, newCoordinates)//передаем новые координаты в попап
   }

   return (
      <section className={`day-element ${isActive}`} onClick={handleClick} type='button'>
         <div className='day-element__data-container'>
            <span className='day-element__day-week'>{props.dayWeek}</span>
            <span className='day-element__number'>{props.dateCrid}</span>
         </div>
         <div className='day-element__info-container'>
            <p className='day-element__title'>{props.todayEvent.name}</p>
            <p className='day-element__text'>{props.todayEvent.participants}</p>
            <p className='day-element__text'>{props.todayEvent.description}</p>
         </div>
      </section>
   );
};

export default DayCell;