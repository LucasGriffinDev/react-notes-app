import ReactMarkDown from 'react-markdown';

function main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };
  if (!activeNote)
    return <div className="no-active-note">No note selected</div>;
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditField('title', e.target.value)}
          autoFocus
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField('body', e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote ? activeNote.title : ''}</h1>
        <ReactMarkDown className="markdown-preview">
          {activeNote ? activeNote.body : ''}
        </ReactMarkDown>
      </div>
    </div>
  );
}

export default main;
