import './ProfileBody.css';
import { Button } from 'reactstrap';
import { useState } from 'react';
import ProfileUpdate from './ProfileUpdate';
import { Link } from 'react-router-dom';

const ProfileBody = ({
   posts = new Array(5),
   follower = new Array(5),
   following = new Array(5),
   img = 'img/profile/profile.jpg',
   name = 'park',
}) => {
   const [isOpen, setIsOpen] = useState(false);
   const modalClose = () => {
      setIsOpen(false);
   };
   const modalOpen = () => {
      setIsOpen(true);
   };
   <ProfileUpdate img={img} name={name} isOpen={isOpen} modalClose={modalClose}></ProfileUpdate>;

   return (
      <>
         <div className="profileBodyBox">
            <div className="profileImgBox">
               <img className="profileImg" src={img} alt="myProfileImg"></img>
            </div>
            <div className="profileTextBox">
               <div>
                  {posts.length}
                  <br></br>
                  게시물
               </div>
               <div>
                  {follower.length}
                  <br></br>
                  팔로워
               </div>
               <div>
                  {following.length}
                  <br></br>
                  팔로잉
               </div>
            </div>
         </div>
         <div className="profileBodyButtonBox">
            <Link to={'/profileupdate'}>
               <Button block color="light">
                  프로필 편집
               </Button>
            </Link>
            <Button block color="light">
               보관함 보기
            </Button>
         </div>
      </>
   );
};
export default ProfileBody;
