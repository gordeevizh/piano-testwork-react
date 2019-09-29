import React from 'react';
import Tag from '../Tag';
import './ResultsTable.style.css';


const bemCn = 'results-table';

function ResultsTable(props) {
  const { 
    items:results = null, 
    onAuthorClick = () => null, 
    onTagClick = () => null, 
    onQuestionClick = () => null,
  } = props;

  return !!results && (
      <section className={ bemCn }>
        <div className={ `${bemCn}__list-group` }>
          <ul className={ `${bemCn}__list-title`} >
            <li>Name</li>
            <li>Question</li>
            <li>Answers count</li>
            <li>Tags</li>
          </ul>
  
          { results.map((item) => (
            <ul className={ `${bemCn}__list-item`} key={ item.question_id } >
              <li onClick={ onAuthorClick.bind(null, item.owner.user_id) } >{ item.owner.display_name }</li>
              <li onClick={ onQuestionClick.bind(null, item.question_id) } >{ item.title }</li>
              <li  onClick={ onQuestionClick.bind(null, item.question_id) } >{ item.answer_count }</li>
              <li>
                { 
                  item.tags.map((tagItem) => (
                    <Tag 
                      name={ tagItem } 
                      key={ tagItem }
                      onClick={ onTagClick.bind(null, tagItem) }
                    />
                  )) 
                }
              </li>
            </ul>
          )) }
  
        </div>
      </section>
    );
}

export default ResultsTable;