import './DayCell.css';
import { updateCoordinates } from '../../utils/utils';

const DayCell = (props) => {

   function handleClick(evt) {
      const element = evt.currentTarget //элемент, на котором произошло событие клика
      console.log(updateCoordinates(element))
      const newCoordinates = updateCoordinates(element)
      props.onEditData(newCoordinates)//передаем новые координаты в попап
   }

   return (
      <section className='day-element'>
         <div className='day-element__data-container' onClick={handleClick} type='button'>
            <span className='day-element__day-week'>{props.dayWeek}</span>
            <span className='day-element__number'>{props.dateCrid}</span>
         </div>
         <div className='day-element__info-container'>
            <p className='day-element__title'></p>
            <p className='day-element__text'></p>
         </div>
      </section>
   );
};

export default DayCell;