import Button from '../Button/Button';
import Form from '../Form/Form';
import InputField from '../InputField/InputField';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import {
   coordinatesLeft,
   coordinatesTop
} from '../../utils/utils'

const PopupAddEvent = (props) => {

   return (
      <PopupWithForm
         popup='big'
         isOpen={props.isOpen}
         onClose={props.onClose}
         coordinates={props.coordinates}
         style={{
            left: coordinatesLeft(props.coordinates),
            top: coordinatesTop(props.coordinates)
         }}
      >
         <Form
            name='big'
         >
            <>
               <InputField
                  id='event'
                  name='event'
                  type='search'
                  placeholder='Событие'
               />
               <InputField
                  id='date'
                  name='date'
                  type='search'
                  placeholder='День, месяц, год'
               />
               <InputField
                  id='participants'
                  name='participants'
                  type='search'
                  placeholder='Имена участников'
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