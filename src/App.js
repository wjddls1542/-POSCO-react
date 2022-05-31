// import './App.css';
// import { Button } from 'reactstrap';
// import { Route, Routes } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BootstrapLogin from './components/Login/BootstrapLogin';
import Page404 from './components/Page404';
import Main from './components/Main';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route index path="/" element={<Main></Main>}></Route>
            <Route index path="/login" element={<BootstrapLogin></BootstrapLogin>}></Route>
            <Route index path="/*" element={<Page404></Page404>}></Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
