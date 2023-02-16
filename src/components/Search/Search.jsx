import './Search.css';

const Search = () => {
   return (
      <div className='search'>
         <button className='search__button'></button>
         <input
            className='search__item'
            type='search'
            placeholder='Введите слово'>
         </input>
      </div>
   );
};

export default Search;