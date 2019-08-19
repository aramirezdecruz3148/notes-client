import React from 'react';
import { shallow } from 'enzyme';
import NoteForm from './NoteForm';

describe('NoteForm component', () => {
  it('renders NoteForm', () => {
    const wrapper = shallow(<NoteForm title='title' note='note' onSubmit={() => { }} onClick={() => { }} handleTitleChange={() => { }} handleNoteChange={() => { }}  />);
    expect(wrapper).toMatchSnapshot();
  });
});
