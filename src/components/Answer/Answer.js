import React from 'react';
import { generatePath } from 'react-router-dom';
import './Answer.style.css';


const bemCn = 'answer';

function Answer(props) {
  const { 
    answer,
  } = props;

  return !!answer && (
    <section key={ answer.answer_id } className={ bemCn } >
      <div className={ `${bemCn}__user-avatar` } >
        <a 
          href={ answer.owner.link } 
          title={ answer.owner.display_name }
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={ answer.owner.profile_image } alt={ answer.owner.display_name } ></img>
        </a>
      </div>
      <article className={ `${bemCn}__info` } >
        <a 
          href={ answer.owner.link } 
          title={ answer.owner.display_name }
          target='_blank'
          rel='noopener noreferrer'
        >
          <h3 className={ `${bemCn}__user-name`}>{ answer.owner.display_name }</h3>
        </a>
        <p>User reputation: { answer.owner.reputation }</p>
        <a 
          href={ generatePath('https://stackoverflow.com/questions/:questionId', { questionId: answer.question_id }) } 
          target='_blank'
          rel='noopener noreferrer'
        >
          go to the answer
        </a>
      </article>
    </section>
  );
}

export default Answer;