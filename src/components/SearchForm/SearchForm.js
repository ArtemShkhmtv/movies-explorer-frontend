function SearchForm() {
  return(
    <section className='search-form'>
      <form >
        <div className='search-form__form' >
          <input className='search-form__input' type='search' placeholder='Фильм'></input>
          <button className='search-form__btn' type='submit'>Найти</button>
        </div>
        <div className='filter-checkbox' >
          <input className='filter-checkbox__nativ' type='checkbox' id='checkbox'></input>
          <div className='filter-checkbox__custom'>
            <label className='filter-checkbox__button' for='checkbox'></label>
          </div>
          <p className='filter-checkbox__name'>Короткометражки</p>
        </div>      
      </form>
    </section>
  )
}

export default SearchForm;