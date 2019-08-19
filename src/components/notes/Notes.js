import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function Notes({ notesArray }) {
  const noteList = notesArray.map(({ _id, title, note }) => (
    <li key={_id}>
      <Note 
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
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
  })).isRequired
};

export default Notes;
