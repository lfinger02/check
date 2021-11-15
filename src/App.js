
import './App.css';
import UserProviderProfile, { useUserProfile } from './pages/user-contextProfile';
import { useState } from 'react';
import Form from './pages/form';
import DisplayProfile from './pages/displayProfile';

function App() {

  return (
    <div className="App">
      <UserProviderProfile>
        <Form />
        <DisplayProfile />
      </UserProviderProfile>
    </div>
  );
}

export default App;
