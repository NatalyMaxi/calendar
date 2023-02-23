import './Search.css';
import React, { useState, useEffect } from 'react';

const Search = (props) => {

   const [searchValue, setSearchValue] = useState()
   const [eventsArray, setEventsArray] = useState([])

   function handleChange(evt) {
      setSearchValue(evt.target.value)
   }

   const showArrayEvents = eventsArray.length > 0 ? 'search__container_type_visible' : ''

   useEffect(() => {
      if (!searchValue) {
         setEventsArray([]);
         return
      }
      const newArray = Object.values(props.events).filter((item) => {
         return item.name?.toLowerCase().includes(searchValue.toLowerCase())
      })
      setEventsArray(newArray)
   }, [searchValue, props.events])

   return (
      <div className='search'>
         <label htmlFor="lfname" className='search__button' alt='Иконка лупа'></label>
         <input
            className='search__item'
            id="lfname"
            type='search'
            name="fname"
            autoComplete="off"
            placeholder='Введите слово'
            list="character"

            value={searchValue || ''}
            onChange={handleChange}
         />
         {
            <div className={`search__container ${showArrayEvents}`} id="character">
               <ul className='search__list'>
                  {
                     eventsArray.map((item) => {
                        return (
                           <li className='search__list-event' key={item.name} tabIndex='0'>
                              <h2 className='search__title'>{item.name}</h2>
                              <p className='search__text'>{item.date}</p>
                           </li>
                        )
                     })
                  }
               </ul>
            </div>
         }
      </div>
   );
};

export default Search;