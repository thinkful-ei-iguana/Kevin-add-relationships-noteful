function makeNoteArray() {
  return [
    {
      id: 1,
      note_name: 'First note',
      content: 'Here is some filler content Lorem ipsum dolor...',
      date_modified: '2029-01-22T16:28:32.615Z'
    },
    {
      id: 2,
      note_name: 'Note one',
      content: 'Filler content for days!',
      date_modified: '2100-05-22T16:28:32.615Z'
    },
    {
      id: 3,
      note_name: 'Alpha note',
      content: 'Best note, note champ!',
      date_modified: '1919-12-22T16:28:32.615Z'
    },
  ];
}

function makeMaliciousNote() {
  const maliciousNote = {
    id: 911,
    note_name:'Naughty naughty very naughty <script>alert("xss");</script>',
    content: 'Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.',
    date_modified: new Date().toISOString()
  };
  const expectedNote = {
    ...maliciousNote,
    note_name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    content: 'Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.'
  };
  return {
    maliciousNote,
    expectedNote,
  };
}

module.exports = {
  makeNoteArray,
  makeMaliciousNote
}