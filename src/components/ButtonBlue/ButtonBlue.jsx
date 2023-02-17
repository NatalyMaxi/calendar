import './ButtonBlue.css';

const ButtonBlue = (props) => {
   return (
      <div className='btn'
         type='button'
         onClick={props.onClick}
      >
         <span>{props.text}</span>
      </div>
   );
};

export default ButtonBlue;