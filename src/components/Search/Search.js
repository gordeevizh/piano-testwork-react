import React, { useState } from 'react';
import { withRouter, generatePath } from 'react-router-dom';
import { PAGE_RESULTS } from '../../constants/routes';

const bemCn = 'search';

function Search(props) {
  const [queryValue, setQueryValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    props.history.push(generatePath(PAGE_RESULTS, { query: queryValue}));
  }

  const handleChangeSearchValue = (e) => {
    setQueryValue(e.target.value);
  }

  return (
    <form 
      className={ bemCn }
      onSubmit={ handleSearch }
    >
      <input 
        className={ `${bemCn}__input`}
        value={ queryValue }
        onChange={ handleChangeSearchValue }
      />
      <button
        className={ `${bemCn}__button`}
      >
        Search
      </button>
    </form>
  );
}

export default withRouter(Search);