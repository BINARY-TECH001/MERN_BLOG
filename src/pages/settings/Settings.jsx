import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import { FaUserCircle } from 'react-icons/fa'
import me from '../../assets/binary.jpg'

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"> Update Your Account </span>
          <span className="settingsDeleteTitle"> Delete Account </span>
        </div>

        <form className='settingsForm'>
          <label className='profileTitle'> Profile Picture </label>
          <div className="settingsPP">
            <img src={me} alt="Profile" />
            <label htmlFor="fileInput">
              <FaUserCircle className="settingsPPIcon icon" />
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label> Username </label>
          <input type="text" placeholder="Ademola" />
          <label> Email </label>
          <input type="email" placeholder="ademola@gmail.com" />
          <label> Password </label>
          <input type="password" />
          <button className="settingsSubmit"> Update </button>
        </form>
      </div>

      <Sidebar />
    </div>
  )
}

export default Settings
