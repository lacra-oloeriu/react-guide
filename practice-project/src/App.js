import React from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
