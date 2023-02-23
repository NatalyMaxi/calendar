import './Header.css';
import ButtonBlue from '../ButtonBlue/ButtonBlue';
import Search from '../Search/Search';

const Header = (props) => {

   return (
      <section className='header'>
         <div className='header-content'>
            <div className='header__buttons-container'>
               <ButtonBlue
                  text='Добавить'
                  onEditQuicklyData={props.onEditQuicklyData}
               />
               <ButtonBlue
                  text='Обновить'
               />
            </div>
            <Search events={props.events}
            />
         </div>
      </section>
   );
};

export default Header;