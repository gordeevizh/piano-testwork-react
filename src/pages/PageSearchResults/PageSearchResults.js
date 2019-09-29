import React, { useEffect } from 'react';
import { withRouter, generatePath } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getSearchResults, getResultsByAuthor, getResultsByTag } from '../../store/actions';
import ResultsTable from '../../components/ResultsTable';
import { PAGE_INFORMATION } from '../../constants/routes';
import './PageSearchResults.style.css';

const bemCn = 'search-results'


function PageSearchResults(props) {
  const dispatch = useDispatch();
  const results = useSelector(state => state.searchResults.items);
  const quickResults = useSelector(state => state.quickResults.items);
  const query = decodeURI(props.match.params.query);

  useEffect (()=> {
    dispatch(getSearchResults(query));
  }, [query, dispatch])

  const handleAuthorclick = (userId) => {
    dispatch(getResultsByAuthor(userId));
  }

  const handleTagClick = (tag) => {
    dispatch(getResultsByTag(tag));
  }

  const handleQuestionClick = (questionId) => {
    props.history.push(generatePath(PAGE_INFORMATION, { questionId: questionId}));
  }

  return (
    <section>
      <h1>Search Results</h1>

      {results ? (
        <div className={ bemCn }>
          <ResultsTable 
            items={ results } 
            onAuthorClick={ handleAuthorclick }
            onTagClick={ handleTagClick }
            onQuestionClick={ handleQuestionClick }
          />
          <ResultsTable 
            items={ quickResults } 
            onAuthorClick={ handleAuthorclick }
            onTagClick={ handleTagClick }
            onQuestionClick={ handleQuestionClick }
          />
        </div>
      ) : (
        'loading...'
      )}
    </section>
  );
}

export default withRouter(PageSearchResults);