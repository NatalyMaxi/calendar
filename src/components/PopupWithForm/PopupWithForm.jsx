import './PopupWithForm.css';

const PopupWithForm = (props) => {

   const popupIsActive = props.isOpen ? 'popup_active' : '';
   return (
      <div className={`popup popup_type_${props.popup} ${popupIsActive}`} style={{ left: props.coordinates.left, top: props.coordinates.top + 40 }}>
         <div className='popup__content' >
            <button
               type='button'
               className='popup__close'
               onClick={props.onClose}>
            </button>
            {props.children}
         </div>
      </div>
   );
};

export default PopupWithForm;