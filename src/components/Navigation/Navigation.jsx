import './Navigation.css';

const Navigation = (props) => {
   return (
      <div className='navigation'>
         <button
            className='navigation__btn'
            type="button"
            onClick={props.showPreviousMonth}
         >
            <span className='navigation__item'>◀</span>
         </button>
         <div className='navigation__board'>{props.currentDate}</div>
         <button
            className='navigation__btn'
            type="button"
            onClick={props.showNextMonth}
         >
            <span className='navigation__item'>▶</span>
         </button>

         <button
            className='navigation__button'
            type="button"
            onClick={props.showCurrentDate}
         >Сегодня
         </button>

      </div>
   );
};

export default Navigation;