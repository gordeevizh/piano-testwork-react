import React from 'react';
import { withRouter } from 'react-router-dom';
import { PAGE_RESULTS } from '../../constants/routes';

function Search(props) {

  const handleSearch = (e) => {
    e.preventDefault();
    props.history.push(PAGE_RESULTS)
  }

  return (
    <form onSubmit={ handleSearch }>
      <input />
      <button>
        Search
      </button>
    </form>
  );
}

export default withRouter(Search);