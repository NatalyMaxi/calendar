import './ButtonBlue.css';
import { updateCoordinates } from '../../utils/utils';

const ButtonBlue = (props) => {

   function handleClick(evt) {
      const element = evt.currentTarget
      console.log(updateCoordinates(element))
      const newCoordinates = updateCoordinates(element)
      props.onEditQuicklyData(newCoordinates)
   }

   return (
      <button className='btn'
         type='button'
         onClick={handleClick}
      >
         <span>{props.text}</span>
      </button>
   );
};

export default ButtonBlue;