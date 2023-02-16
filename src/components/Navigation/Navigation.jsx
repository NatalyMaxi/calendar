import './Navigation.css';

const Navigation = () => {
   return (
      <div className='navigation'>
         <button
            className='navigation__btn'
            type="button"
         >
            <span className='navigation__item'>◀</span>
         </button>
         <div className='navigation__board'>Ноябрь 2021</div>
         <button
            className='navigation__btn'
            type="button"
         >
            <span className='navigation__item'>▶</span>
         </button>

         <button
            className='navigation__button'
            type="button"
         >Сегодня
         </button>

      </div>
   );
};

export default Navigation;