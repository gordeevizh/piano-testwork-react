import React from 'react';
import { useDispatch } from "react-redux";
import { getResultsByAuthor, getResultsByTag } from '../../store/actions';
import Tag from '../Tag';
import './ResultsTable.style.css';


const bemCn = 'results-table';

function ResultsTable(props) {
  const { items:results } = props
  const dispatch = useDispatch();

  const handleAuthorclick = (userId) => {
    dispatch(getResultsByAuthor(userId));
  }

  const handleTagClick = (tag) => {
    dispatch(getResultsByTag(tag));
  }

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
              <li onClick={ handleAuthorclick.bind(null, item.owner.user_id) }>{ item.owner.display_name }</li>
              <li>{ item.title }</li>
              <li>{ item.answer_count }</li>
              <li>
                { 
                  item.tags.map((tagItem) => (
                    <Tag 
                      name={ tagItem } 
                      key={ tagItem }
                      onClick={ handleTagClick.bind(null, tagItem) }
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