import React from 'react';

const bemCn = 'tag';

function Tag(props) {
  const { name = 'defaultTagName' } = props

  return (
    <button
      className={ bemCn }
      type="button"
    >
      { name }
    </button>
  )
}

export default Tag;