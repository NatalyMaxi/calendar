import './StartPage.css';
import { NavLink } from 'react-router-dom';

const StartPage = () => {
   return (
      <NavLink to='/calendar' className='start-page'></NavLink>
   );
};

export default StartPage;
