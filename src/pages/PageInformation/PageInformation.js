import React, { useEffect } from 'react';
import { withRouter, generatePath } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAnswers } from '../../store/actions';


function PageInformation(props) {
  const dispatch = useDispatch();
  const questionId = decodeURI(props.match.params.questionId);
  const results = useSelector(state => state.answers.items);

  useEffect (()=> {
    dispatch(getAnswers(questionId));
  }, [questionId, dispatch])

  return (
    <section>
      <h1>Answers</h1>
      { !!results && (
        results.map(item => (
          <ul key={ item.answer_id } >
            <li>
              <img src={ item.owner.profile_image } alt={ item.owner.display_name }></img>
            </li>
            <li>
              <a href={ item.owner.link } title={ item.owner.display_name }>{ item.owner.display_name }</a>
            </li>
            <li>User reputation: { item.owner.reputation }</li>
            <li>
              <a 
                href={ generatePath('https://stackoverflow.com/questions/:questionId', { questionId: item.question_id }) } 
                target='_blank'
                rel='noopener noreferrer'
              >
                go to the answer
              </a>
            </li>
          </ul>
        ))
      ) }
    </section>
  );
}

export default withRouter(PageInformation);