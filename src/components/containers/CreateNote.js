import React, { Component } from 'react';
import NoteForm from '../notes/NoteForm';
import { createNote } from '../../services/notesApi';

export default class CreateNote extends Component {
  state = { 
    note: '',
    title: ''
  }

  handleTitleChange = ({ target }) => {
    this.setState({ title: target.value });
  }

  handleNoteChange = ({ target }) => {
    this.setState({ note: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, note } = this.state;
    createNote(title, note)
      .then(note => console.log(note));
  }

  render() {
    const { title, note, handleSubmit } = this.state;
    return (
      <>
        <NoteForm 
          handleTitleChange={this.handleTitleChange} 
          handleNoteChange={this.handleNoteChange} 
          title={title}
          note={note}
          onSubmit={handleSubmit}
        />
      </>
    );
  }
}
