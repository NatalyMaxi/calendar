import './InputField.css';

const InputField = (props) => {
   return (
      <input
         className='field'
         id={props.id}
         name={props.name}
         type={props.type}
         placeholder={props.placeholder}
         {...props.rest}>
      </input>
   );
};

export default InputField;