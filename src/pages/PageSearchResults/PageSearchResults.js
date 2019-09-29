import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { searchResult } from './mock';
import ResultsTable from '../../components/ResultsTable'

const bemCn = 'search-results'


function PageSearchResults(props) {
  const [results, setResults] = useState(null);
/*   const [error, setError] = useState(null); */
  const query = props.match.params.query;

  useEffect (()=> {
    /* fetch(`http://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&q=${query}&site=stackoverflow`)
    .then(function (response) {
      setResults(response.data);
    })
    .catch(function (error) {
      setError(error);
    }) */
    setResults(searchResult);
  }, [query])

  return (
    <section>
      <h1>Search Results</h1>

      {results ? (
        <div className={ bemCn }>
          <ResultsTable items={ results.items }/>
        </div>
      ) : (
        'loading...'
      )}
    </section>
  );
}

export default withRouter(PageSearchResults)