import './Form.css';

const Form = (props) => {

   const addTextarea = props.name === 'big'? true: false

   return (
      <form
         name={props.name}
         className='form'
         noValidate
         onSubmit={props.onSubmit}
         {...props.rest}
      >
         <div className='form__container'>
            <div className='form__input-container'>
               {props.children[0]}

               {
                  addTextarea &&
                  <textarea className='form__item' id='event' cols="30" rows="10" placeholder='Описание события'></textarea>
               }

            </div>
            <div className='form__button-container'>
               {props.children[1]}
            </div>
         </div>
      </form>
   );
};

export default Form;