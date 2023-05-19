import ProfilePic from "../components/ProfilePic";
import UserInfo from "../components/UserInfo";
import ava1 from "../assets/ava1.png";

function Profile() {
  return (
    <>
    <ProfilePic avatar={ava1}/>
    <UserInfo/>
    </>
  )
}

export default Profile;