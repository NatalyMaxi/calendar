import './Header.css';
import ButtonBlue from '../ButtonBlue/ButtonBlue';
import Search from '../Search/Search';

const Header = (props) => {

   return (
      <div className='header'>
         <div className='header-content'>
            <div className='header__buttons-container'>
               <ButtonBlue text='Добавить' onEditQuicklyData={props.onEditQuicklyData} />
               <ButtonBlue text='Обновить' />
            </div>
            <Search />
         </div>
      </div>
   );
};

export default Header;