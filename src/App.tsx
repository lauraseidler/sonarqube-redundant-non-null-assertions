import React, { useState } from 'react';

interface UserData {
    name: string;
}

interface User {
    data: UserData;
}

function App() {
  const [user] = useState<User | null>(null);

  const doSomethingWithUser = () => {
      console.log(user!.data.name);
  };

  return user ? (
      <button onClick={doSomethingWithUser}>Do something</button>
  ) : null;
}

export default App
