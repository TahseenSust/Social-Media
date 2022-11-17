import './profile.css'
import Topbar from '../topbar/Topbar'
import Sidebar from '../sidebar/Sidebar'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'

function Profile() {
  return (
    <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                        <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Tahseen Rasheed</h4>
                        <span className="profileInfoDesc">Tahseen Rasheed </span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile