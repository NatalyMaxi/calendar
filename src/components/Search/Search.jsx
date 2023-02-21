import './Search.css';

const Search = () => {
   return (
      <div className='search'>
         <label htmlFor="lfname" className='search__button' alt='Иконка лупа'></label>
         <input
            className='search__item'
            id="lfname"
            type='search'
            name="fname"
            placeholder='Введите слово'>
         </input>
      </div>
   );
};

export default Search;