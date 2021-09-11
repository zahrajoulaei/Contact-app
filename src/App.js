import React from 'react';
import AddUsers from './components/Users/AddUser';
import UsersList from './components/Users/UsersLists';


function App() {
  return (
    <div>
      <AddUsers />
      <UsersList users={[]}></UsersList>
    </div>
  );
}

export default App;
