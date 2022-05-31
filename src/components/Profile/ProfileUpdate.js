import { useContext, useState } from 'react';
import { UserContext } from '../../store/UserContext';
import './ProfileUpdate.css';
import { Modal } from 'reactstrap';
import ProfileUpdateHeader from './ProfileUpdateHeader';
import ProfileUpdateBody from './ProfileUpdateBody';
const ProfileUpdate = ({ img = '/img/profile/profile.jpg', name = 'park', isOpen, modalClose }) => {
   const [form, setForm] = useState({
      name,
      img,
   });
   const onChangeFile = e => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise(resolve => {
         reader.onload = () => {
            setForm({ ...form, img: reader.result });
            resolve();
         };
      });
   };
   const onChangeName = e => {
      const { value } = e.target;
      setForm({ ...form, name: value });
   };
   const { updateUsers } = useContext(UserContext);
   const onSubmit = () => {
      updateUsers(form);
      modalClose();
   };
   return (
      <Modal fullscreen isOpen={isOpen}>
         <ProfileUpdateHeader modalClose={modalClose} onSubmit={onSubmit}></ProfileUpdateHeader>
         <ProfileUpdateBody onChangeName={onChangeName} onChangeFile={onChangeFile} form={form}></ProfileUpdateBody>
      </Modal>
   );
};
export default ProfileUpdate;
