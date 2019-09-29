import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getSearchResults } from '../../store/actions';
import ResultsTable from '../../components/ResultsTable';
import './PageSearchResults.style.css';

const bemCn = 'search-results'


function PageSearchResults(props) {
  const dispatch = useDispatch();
  const results = useSelector(state => state.searchResults.items);
  const quickResults = useSelector(state => state.quickResults.items);
  const query = props.match.params.query;

  useEffect (()=> {
    dispatch(getSearchResults(query));
  }, [query, dispatch])

  return (
    <section>
      <h1>Search Results</h1>

      {results ? (
        <div className={ bemCn }>
          <ResultsTable items={ results } />
          <ResultsTable items={ quickResults } />
        </div>
      ) : (
        'loading...'
      )}
    </section>
  );
}

export default withRouter(PageSearchResults);