import Button from '../Button/Button';
import Form from '../Form/Form';
import InputField from '../InputField/InputField';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupAddQuicklyEvent = (props) => {
   
   return (
      <PopupWithForm
         popup='small'
         name='small-popup'
         isOpen={props.isOpen}
         onClose={props.onClose}
         style={{ left: props.coordinates.left, top: props.coordinates.top + 40 }}
      >
         <Form
            name='small'
         >
            <>
               <InputField 
                  id='info'
                  name='info'
                  type='search'
                  placeholder='Введите дату и событие' 
                  />
            </>
            <>
               <Button
                  type='submit'
                  text='Создать' />
            </>
         </Form>
      </PopupWithForm>
   );
};

export default PopupAddQuicklyEvent;