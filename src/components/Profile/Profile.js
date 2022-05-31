import { UserContext } from '../../store/UserContext';
import { useContext } from 'react';
import './Profile.css';
import { Container } from 'reactstrap';
import ProfileHeader from './ProfileHeader';
import ProfileBody from './ProfileBody';
import { PostContext } from '../../store/PostContext';
import { FollowContext } from '../../store/FollowContext';

const Profile = () => {
   const { users } = useContext(UserContext);
   const id = Number(localStorage.getItem('id'));
   const getUser = () => {
      return users.find(user => id === user.id);
   };
   const { name, img } = getUser();
   const { posts } = useContext(PostContext);
   const { follows } = useContext(FollowContext);
   const myPosts = () => {
      return follows.filter(post => post.useId === id);
   };
   const myFollower = () => {
      return follows.filter(follow => follow.following === id);
   };
   const myFollowing = () => {
      return follows.filter(follow => follow.follower === id);
   };

   return (
      <>
         <ProfileHeader name={name}></ProfileHeader>
         <Container className="ProfileContainer">
            <ProfileBody img={img} follower={myFollower()} following={myFollowing()} posts={myPosts()}></ProfileBody>
         </Container>
      </>
   );
};

export default Profile;
