import { Users } from './User';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthRouter = () => {
   const navigate = useNavigate();
   const location = useLocation();
   useEffect(() => {
      const id = localStorage.getItem('id');
      const findUser = Users.find(data => data.id === Number(id));
      if (!findUser || !id) {
         navigate('/login');
      } else {
         const from = location.pathname || '/';
         navigate(from === '/login' ? '/' : from);
      }
   }, []);
   return <></>;
};
export default AuthRouter;
