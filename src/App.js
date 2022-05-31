// import './App.css';
// import { Button } from 'reactstrap';
// import { Route, Routes } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BootstrapLogin from './components/Login/BootstrapLogin';
import Page404 from './components/Page404';
import Main from './components/Main';
import Join from './components/Join/Join';
import { useState } from 'react';
import { UserContext } from './store/UserContext';
import { Users } from './components/User';
function App() {
   const [users, setUsers] = useState(Users);
   const insertUsers = user => {
      const newUser = { ...user, userId: user.id, id: users.length };
      setUsers([...users, newUser]);
   };
   return (
      <UserContext.Provider value={{ users, insertUsers }}>
         <BrowserRouter>
            <Routes>
               <Route index path="/" element={<Main></Main>}></Route>
               <Route index path="/login" element={<BootstrapLogin></BootstrapLogin>}></Route>
               <Route index path="/*" element={<Page404></Page404>}></Route>
               <Route index path="/join" element={<Join></Join>}></Route>
            </Routes>
         </BrowserRouter>
      </UserContext.Provider>
   );
}

export default App;
