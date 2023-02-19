import './ButtonBlue.css';

const ButtonBlue = (props) => {
   /**Получение координат элемента
 * 
 * @param {*Обект с координатами} value 
 * @returns 
 */
   function updateCoordinates(value) {
      return value.getBoundingClientRect()
   }

   function handleClick(evt) {
      const element = evt.currentTarget //элемент, на котором произошло событие клика
      console.log(updateCoordinates(element))
      const newCoordinates = updateCoordinates(element)
      props.onEditQuicklyData(newCoordinates)//передаем новые координаты в попап
   }

   return (
      <button className='btn'
         type='button'
         onClick={handleClick}
      >
         <span>{props.text}</span>
      </button>
   );
};

export default ButtonBlue;