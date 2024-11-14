import { useContext } from 'react';
import {UserContext} from './provider';
 import AuthApp from './AuthApp';
 import UnauthApp from './UnthApp';
function App() {
const { user } = useContext(UserContext);
return( user.auth ? <AuthApp></AuthApp>:<UnauthApp></UnauthApp>)
}
export default App;

