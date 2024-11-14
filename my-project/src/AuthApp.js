import React, { useContext } from 'react';
import { UserContext } from './provider';
export default function AuthApp() {
const { user, logout } = useContext(UserContext);
return (
<>
<h1>Hello, {user.name}!</h1>
<button onClick={logout}>Logout</button>
</>
);
}
