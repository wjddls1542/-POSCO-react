import { Button } from 'reactstrap';

const ProfileUpdateHeader = ({ modalClose, onSubmit }) => {
   return (
      <div className="profileUpdateHeader">
         <Button outline color="secondary" onClick={modalClose}>
            취소
         </Button>
         <b>프로필 수정</b>
         <Button outline color="primary" onClick={onSubmit}>
            수정
         </Button>
      </div>
   );
};
export default ProfileUpdateHeader;
