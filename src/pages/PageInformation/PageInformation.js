import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAnswers } from '../../store/actions';
import Answer from '../../components/Answer/Answer';
import './PageInformation.style.css';

const bemCn = 'page-information';


function PageInformation(props) {
  const dispatch = useDispatch();
  const questionId = decodeURI(props.match.params.questionId);
  const results = useSelector(state => state.answers.items);

  useEffect (()=> {
    dispatch(getAnswers(questionId));
  }, [questionId, dispatch])

  return (
    <section className={ bemCn }>
      <h1>Answers</h1>
      { !!results && (
        results.map(item => <Answer answer={ item } className={ `${bemCn}__answer` } key={ item.answer_id }/> )
      ) }
    </section>
  );
}

export default withRouter(PageInformation);