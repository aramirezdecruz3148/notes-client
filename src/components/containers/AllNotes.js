import React, { Component } from 'react';
import { getNotes } from '../../services/notesApi';
import Notes from '../notes/Notes';

export default class AllNotes extends Component {
state = {
  notesArray: [], 
  error: null
}

fetchNotes = () => {
  return getNotes()
    .then((notesArray) => {
      this.setState({ notesArray: notesArray });
    })
    .catch(err => this.setState({ error: err }));
}

componentDidMount() {
  this.fetchNotes();
}

componentDidUpdate(prevProps, prevState) {
  if(prevState.notesArray !== this.state.notesArray) return this.fetchNotes();
}

render() {
  const { notesArray, error } = this.state;

  if(error) return <h1>Unable to load notes, try again!</h1>;

  return (
    <>
      <Notes notesArray={notesArray}/>
    </>
  );
}
}

