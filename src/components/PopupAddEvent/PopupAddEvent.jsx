import Button from '../Button/Button';
import Form from '../Form/Form';
import InputField from '../InputField/InputField';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupAddEvent = (props) => {


   
   return (
      <PopupWithForm
         popup='big'
         isOpen={props.isOpen}
         onClose={props.onClose}
      >
         <Form
         name='big'
            >
            <>
               <InputField
                  id='date'
                  name='date'
                  type='search'
                  placeholder='Дата'
               />
               <InputField
                  id='participants'
                  name='participants'
                  type='search'
                  placeholder='Участники'
               />
            </>
            <>
               <Button
                  type='submit'
                  text='Готово'
               />
               <Button
                  type='submit'
                  text='Удалить'
               />
            </>
         </Form>
      </PopupWithForm>
   );
};

export default PopupAddEvent;