import Button from '../Button/Button';
import Search from '../Search/Search';
import './Header.css';

const Header = () => {
   return (
      <div className='header'>
         <div className='header-content'>
            <div className='header__buttons-container'>
               <Button text='Добавить' />
               <Button text='Обновить' />
            </div>
            <Search />
         </div>
      </div>
   );
};

export default Header;