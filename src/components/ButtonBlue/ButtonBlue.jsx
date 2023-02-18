import './ButtonBlue.css';

const ButtonBlue = (props) => {
   return (
      <button className='btn'
         type='button'
         onClick={props.onClick}
      >
         <span>{props.text}</span>
      </button>
   );
};

export default ButtonBlue;