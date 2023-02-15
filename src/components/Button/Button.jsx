import './Button.css';

const Button = (props) => {
   return (
      <div className='button'>
         <span>{props.text}</span>
         </div>
   );
};

export default Button;