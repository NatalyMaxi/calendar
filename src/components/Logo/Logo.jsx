import './Logo.css';
import logo from '../../images/Logo.svg'

const Logo = () => {
   return (
      <a rel='noreferrer' href='https://iqdev.digital/' target='_blank'> <img className='logo' alt='Логотип' src={logo}/></a> 
   );
};

export default Logo;