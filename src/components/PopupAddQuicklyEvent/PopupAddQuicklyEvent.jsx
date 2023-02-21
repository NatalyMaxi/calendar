import React, { useState, } from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import InputField from '../InputField/InputField';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const PopupAddQuicklyEvent = (props) => {
   const [name, setName] = useState('');

   function handleChangeName(evt) {
      setName(evt.target.value)
   };

   function handleSubmit(evt) {
      evt.preventDefault()
      props.onAddEvent({
         name: name,
      })
      setName('')
   }

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
            onSubmit={handleSubmit}
         >
            <>
               <InputField 
                  id='info'
                  name='info'
                  type='text'
                  placeholder='Введите событие на текущий день'
                  value={name || ''}
                  onChange={handleChangeName}
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