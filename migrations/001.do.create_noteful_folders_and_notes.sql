CREATE TABLE notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    note_name TEXT NOT NULL,
    content TEXT NOT NULL,
    date_modified TIMESTAMP DEFAULT now() NOT NULL
);

CREATE TABLE folders (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    folder_name TEXT NOT NULL,
    note INTEGER REFERENCES notes(id) ON DELETE CASCADE NOT NULL,
    date_modified TIMESTAMP DEFAULT now() NOT NULL
);