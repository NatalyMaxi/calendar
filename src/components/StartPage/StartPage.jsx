import './StartPage.css';
import { Link } from 'react-router-dom';

const StartPage = () => {
   return (
      <Link to='calendar' className='start-page'></Link>
   );
};

export default StartPage;
