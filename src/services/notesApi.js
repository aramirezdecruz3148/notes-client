export const createNote = (title, note) => {
  return fetch('http://localhost:7891/api/v1/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, note })
  })
    .then(res => {
      if(!res.ok) throw 'Unable to submit note';
      return res.json();
    });
  
};

export const getNotes = () => {
  return fetch('http://localhost:7891/api/v1/notes')
    .then(res => {
      if(!res.ok) throw 'Unable to load notes, try again!';

      return res.json();
    });
};
