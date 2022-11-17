import "./rightbar.css"
import {Users} from '../../dummyData'
import Online from "../online/Online"

function Rightbar() {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.png" alt="" />
            <span className="birthdayText"> John and 5 other friends have brithday today </span>
          </div>
          <img className="rightbarAd" src="assets/ad.png" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map(u => (
              <Online key={u.id} user={u}/>
            ))}
          </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className="rightbarTitle">User information title</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">Sylhet</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">Dhaka</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Work at: </span>
            <span className="rightbarInfoValue">Google</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John wick</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <ProfileRightbar/>
        </div>
    </div>
  )
}

export default Rightbar