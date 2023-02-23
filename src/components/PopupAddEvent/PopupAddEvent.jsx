import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import InputField from '../InputField/InputField';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import {
   coordinatesLeft,
   coordinatesTop
} from '../../utils/utils'

const PopupAddEvent = (props) => {
   
   const [name, setName] = useState('');
   const [date, setDate] = useState('');
   const [participants, setParticipants] = useState([]);
   const [description, setDescription] = useState('')

   function handleChangeName(evt) {
      setName(evt.target.value)
   };

   function handleChangeDate(evt) {
      setDate(evt.target.value)
   };

   function handleChangeParticipants(evt) {
      setParticipants(evt.target.value)
   };

   function handleChangeDescription(evt) {
      setDescription(evt.target.value)
   };

   function handleSubmit(evt) {
      evt.preventDefault()
      props.onAddEvent({
         name: name,
         date: date,
         participants: participants,
         description: description
      })
      setName('')
      setDate('')
      setParticipants('')
      setDescription('')
   }

   function handleSubmitDelete(evt) {
      evt.preventDefault()
      props.onDeleteEvent({ name, date, participants, description })
   }

   useEffect(() => {
      setName('')
      setDate('')
      setParticipants('')
      setDescription('')
   }, [])

   return (
      <PopupWithForm
         popup='big'
         isOpen={props.isOpen}
         onClose={props.onClose}
         coordinates={props.coordinates}
         day={props.day}
         style={{
            left: coordinatesLeft(props.coordinates),
            top: coordinatesTop(props.coordinates)
         }}
      >
         <Form
            name='big'
            onSubmit={handleSubmit}
            value={description}
            onChange={handleChangeDescription}
            onDeleteEvent={handleSubmitDelete}
         >
            <>
               <InputField
                  id='event'
                  name='name'
                  type='text'
                  placeholder='Событие'
                  value={name}
                  onChange={handleChangeName}
               />
               <InputField
                  id='date'
                  name='date'
                  type='text'
                  placeholder='Формат даты 2023-02-17'
                  value={date}
                  onChange={handleChangeDate}
               />
               <InputField
                  id='participants'
                  name='participants'
                  type='text'
                  placeholder='Имена участников'
                  value={participants}
                  onChange={handleChangeParticipants}
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