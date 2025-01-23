import "./App.css";
import UserNameInput from "./components/UserNameInput/UserNameInput";
import { useState } from "react";
import DisplayNoteList from "./components/DisplayNoteList/DisplayNoteList";

function App() {
  const [userName, setUserName] = useState("");
  const [savedUserName, setSavedUserName] = useState("");

  return (
    <>
      <h1>Hello Swingnotes</h1>
      <UserNameInput
        setUserName={setUserName}
        setSavedUserName={setSavedUserName}
        userName={userName}
      />
      <DisplayNoteList savedUserName={savedUserName} />
    </>
  );
}

export default App;
