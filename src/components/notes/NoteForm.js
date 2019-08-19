import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteForm.css';

function NoteForm({ 
  onSubmit,  
  handleTitleChange,
  handleNoteChange,
  title,
  note
}) {
  return (
    <form 
      className={styles.form} 
      onSubmit={onSubmit}>
      <input 
        className={styles.inputs}
        onChange={handleTitleChange} 
        value={title} name='title' 
        type='text' 
        placeholder='note title' 
      />
      <textarea 
        className={styles.inputs}
        onChange={handleNoteChange} 
        value={note} 
        name='note' 
        type='text' 
        placeholder='note text'
      />
      <button className={styles.inputs}>Make Note!</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleNoteChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
};

export default NoteForm;
