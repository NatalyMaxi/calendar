/**Получение координат элемента
* 
* @param {*Обект с координатами} value 
* @returns 
*/
export function updateCoordinates(obj) {
   return obj.getBoundingClientRect()
}

export function coordinatesLeft(obj) {
   let left = obj.left;

   if (left > 950) {
      return left - 300
   }
   return left + 150
}

export function coordinatesTop(obj) {
   let top = obj.top;

   if (top > 600) {
      return top - 200
   }

   return top
}