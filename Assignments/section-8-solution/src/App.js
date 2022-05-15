import React from "react";

import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
