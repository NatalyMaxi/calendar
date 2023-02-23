import './Navigation.css';
import Button from '../Button/Button';

const Navigation = (props) => {
   
   return (
      <div className='navigation'>
         <button
            className='navigation__btn'
            type='button'
            onClick={props.showPreviousMonth}
         >
            <span className='navigation__item'>◀</span>
         </button>
         <div className='navigation__board'>{props.currentDate}</div>
         <button
            className='navigation__btn'
            type='button'
            onClick={props.showNextMonth}
         >
            <span className='navigation__item'>▶</span>
         </button>
         <Button
            type='button'
            text='Сегодня'
            onClick={props.showCurrentDate}
         />
      </div>
   );
};

export default Navigation;