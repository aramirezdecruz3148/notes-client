import React from 'react';
import PropTypes from 'prop-types';

function Notes({ notesArray }) {
  const noteList = notesArray.map(({ id, title, note }) => (
    <li key={id}>
      <Notes 
        title={title}
        note={note}
      />
    </li>
  ));

  return (
    <ul>
      {noteList}
    </ul>
  );
}

Notes.propTypes = {
  notesArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
  })).isRequired
};

export default Notes;
