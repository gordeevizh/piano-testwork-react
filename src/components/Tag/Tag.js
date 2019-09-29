import React from 'react';
import './Tag.style.css';

const bemCn = 'tag';

function Tag(props) {
  const { name = 'defaultTagName' } = props

  return (
    <button
      className={ bemCn }
      type="button"
      onClick={ props.onClick }
    >
      { name }
    </button>
  )
}

export default Tag;