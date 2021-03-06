import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Ahmad Arman</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Amman</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Jordan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/mousa.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Mousa Sabbah</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/tasnem.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tasneem Wahebi</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/anwars.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anwar shrideh</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/farah.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Farah Wahebi</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/wesam.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Wesam almasri</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/anwara.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Anwar Abbas</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}