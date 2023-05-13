import Form from './Components/Form';
import './App.css';
import UserDetail from './Components/UserDetail';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge , cName) => {
    setUserList((prev) => {
      return [...prev,{ name: uName , age: uAge , college: cName , id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <Form onAddUser={addUserHandler}/>
      <UserDetail users={userList}/>
    </div>
  );
}

export default App;

