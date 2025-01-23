function DeleteNote({ noteId, setDeletedNote }) {
  const handleBtnDeleteNote = async () => {
    try {
      let response = await fetch(
        `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${noteId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let deletedNote = await response.json();
      setDeletedNote(deletedNote);
    } catch (error) {
      console.error("Error fetching notes: ", error);
    }
  };

  return <button onClick={handleBtnDeleteNote}>Delete Note</button>;
}

export default DeleteNote;
