function SearchForm() {
  return(
    <section className='search-form'>
      <form className='search-form__form' >
        <input className='search-form__input' type='search' placeholder='Фильм'></input>
        <button className='search-form__btn'>Найти</button>
      </form>

      <section className='filter-checkbox' >
        <input className='filter-checkbox__nativ' type='checkbox' id='checkbox'></input>
        <label className='filter-checkbox__custom' for='checkbox'>
          <label className='filter-checkbox__button' for='checkbox'></label>
        </label>
        <p className='filter-checkbox__name'>Короткометражки</p>
      </section>
    </section>
  )
}

export default SearchForm;