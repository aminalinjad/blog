import {useState} from 'react'

const Search = () => {
  let [searchValue, setSearchValue] = useState('')

  function handleSearch(e) {
    const {value} = e.target;
    setSearchValue(value);
    console.log({value})
  }

  return (
    <div>
      <input
        placeholder={'Search Field'}
        type="text"
        className={'search-input'}
        value={searchValue}
        onChange={handleSearch}/>
    </div>
  );
};

export default Search;