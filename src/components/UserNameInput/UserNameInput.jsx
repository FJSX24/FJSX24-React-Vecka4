function UserNameInput({ setUserName, userName, setSavedUserName }) {
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleBtnClick = () => {
    setSavedUserName(userName);
  };

  return (
    <div>
      <input placeholder="User name:" onChange={handleUserNameChange}></input>
      <button onClick={handleBtnClick}>Get your swing notes</button>
    </div>
  );
}

export default UserNameInput;
