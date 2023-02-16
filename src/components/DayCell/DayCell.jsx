import './DayCell.css';

const DayCell = (props) => {
   return (
      <section className='day-element'>
         <div className='day-element__data-container'>
            <span className='day-element__day-week'>Понедельник, </span>
            <span className='day-element__number'>1</span>
         </div>
         <div className='day-element__info-container'>
            <p className='day-element__title'>Шашлыки</p>
            <p className='day-element__text'>Филип Коров, Дмитрий Табасков</p>
         </div>
      </section>
   );
};

export default DayCell;