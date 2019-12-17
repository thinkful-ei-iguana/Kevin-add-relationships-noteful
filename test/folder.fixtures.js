function makeFolderArray() {
  return [
    {
      id: 1,
      folder_name: 'First folder',
      note: 1,
      date_modified: '2029-01-22T16:28:32.615Z'
    },
    {
      id: 2,
      folder_name: 'Folder one',
      note: 2,
      date_modified: '2100-05-22T16:28:32.615Z'
    },
    {
      id: 3,
      folder_name: 'Alpha folder',
      note: 3,
      date_modified: '1919-12-22T16:28:32.615Z'
    },
  ];
}

function makeMaliciousFolder() {
  const maliciousFolder = {
    id: 911,
    folder_name: 'Naughty naughty very naughty <script>alert("xss");</script>',
    note: 911,
    date_modified: new Date().toISOString()
  };
  const expectedFolder = {
    ...maliciousFolder,
    folder_name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
  };
  return {
    maliciousFolder,
    expectedFolder,
  };
}

module.exports = {
  makeFolderArray,
  makeMaliciousFolder
}