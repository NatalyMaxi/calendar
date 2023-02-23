import './StartPage.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const StartPage = () => {

   return (
      <div className='start-page'>
         <div className='start-page__container'>
            <Logo />
            <button className='start-page__button start-page__button_type_dummy'>TEST TASK</button>
            <h1 className='start-page__title'>JUNIOR FRONTEND</h1>
            <Link to='calendar'><button className='start-page__button '>CALENDAR</button></Link>
         </div>
      </div>
   );
};

export default StartPage;
