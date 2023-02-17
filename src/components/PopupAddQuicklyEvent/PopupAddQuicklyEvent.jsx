import Button from '../Button/Button';
import Form from '../Form/Form';
import InputField from '../InputField/InputField';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupAddQuicklyEvent = (props) => {
   return (
      <PopupWithForm
         popup='small'
         isOpen={props.isOpen}
         onClose={props.onClose}
      >
         <Form>
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