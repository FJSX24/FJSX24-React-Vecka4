import DeleteNote from "./../DeleteNote/DeleteNote";

function NoteListItem({ userData, setDeletedNote }) {
  return (
    <div>
      {userData.map((note) => {
        return (
          <div key={note.id}>
            <h3>Note title: {note.title}</h3>
            <p>Note description: {note.note}</p>
            <DeleteNote noteId={note.id} setDeletedNote={setDeletedNote} />
          </div>
        );
      })}
    </div>
  );
}

export default NoteListItem;
