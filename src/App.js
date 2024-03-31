import React, { useState } from 'react';

const Notepad = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [fontFamily, setFontFamily] = useState('Arial');

  const handleNoteChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const addNote = () => {
    if (currentNote.trim() !== '') {
      setNotes([...notes, { text: currentNote, bold, italic, underline, fontFamily }]);
      setCurrentNote('');
    }
  };

  const toggleFormat = (format) => {
    switch (format) {
      case 'bold':
        setBold(!bold);
        break;
      case 'italic':
        setItalic(!italic);
        break;
      case 'underline':
        setUnderline(!underline);
        break;
      default:
        break;
    }
  };

  const changeFontFamily = (e) => {
    setFontFamily(e.target.value);
  };

  return (
    <div>
      <h1>Notepad</h1>
      <textarea
        value={currentNote}
        onChange={handleNoteChange}
        style={{ 
          fontWeight: bold ? 'bold' : 'normal',
          fontStyle: italic ? 'italic' : 'normal',
          textDecoration: underline ? 'underline' : 'none',
          fontFamily: fontFamily
        }}
      />
      <div>
        <button onClick={() => toggleFormat('bold')}>Bold</button>
        <button onClick={() => toggleFormat('italic')}>Italic</button>
        <button onClick={() => toggleFormat('underline')}>Underline</button>
        <select onChange={changeFontFamily}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Calibri">Calibri</option>
          <option value="Verdana">Verdana</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Georgia">Georgia</option>
          <option value="Palatino Linotype">Palatino Linotype</option>
          <option value="Arial Black">Arial Black</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
        </select>
        <button onClick={addNote}>Add Note</button>
      </div>
      <div>
        <h2>Notes</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index} style={{ fontFamily: note.fontFamily }}>
              <span style={{ 
                fontWeight: note.bold ? 'bold' : 'normal',
                fontStyle: note.italic ? 'italic' : 'normal',
                textDecoration: note.underline ? 'underline' : 'none',
              }}>
                {note.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notepad;