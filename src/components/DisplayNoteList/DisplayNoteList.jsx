import { useState, useEffect } from "react";
import NoteListItem from "./../NoteListItem/NoteListItem";

function DisplayNoteList({ savedUserName }) {
  const [userData, setUserData] = useState([]);
  const [deletedNote, setDeletedNote] = useState();

  useEffect(() => {
    if (!savedUserName) return;

    const getNotes = async () => {
      try {
        let response = await fetch(
          `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${savedUserName}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let result = await response.json();
        setUserData(result.notes || []); // Sätt tom array om `notes` saknas
      } catch (error) {
        console.error("Error fetching notes: ", error);
        setUserData([]); // Sätt tom array om fetch misslyckas
      }
    };
    getNotes();
  }, [savedUserName, deletedNote]);

  return (
    <div>
      {userData.length === 0 ? (
        <p>Du har inga Swing notes sparat</p>
      ) : (
        <section>
          <h2>User: {userData[0].username} have these notes:</h2>
          <NoteListItem userData={userData} setDeletedNote={setDeletedNote} />
        </section>
      )}
    </div>
  );
}

export default DisplayNoteList;
