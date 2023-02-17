import './Button.css';

const Button = (props) => {

   return (
      <button
         className='button'
         type={props.type}
         text={props.text}
         onClick={props.onClick}
         {...props.rest}
      >
         {props.text}
      </button>
   )
}

export default Button;