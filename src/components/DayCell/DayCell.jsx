import './DayCell.css';

const DayCell = (props) => {
   return (
      <section className='day-element'>
         <div className='day-element__data-container'>
            <span className='day-element__day-week'>{props.dayWeek}</span>
            <span className='day-element__number'>{props.num}</span>
         </div>
         <div className='day-element__info-container'>
            <p className='day-element__title'></p>
            <p className='day-element__text'></p>
         </div>
      </section>
   );
};

export default DayCell;