import React from 'react';
import PropTypes from 'prop-types';

function Note({ title, note }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>{note}</p>
    </section>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
};

export default Note;
