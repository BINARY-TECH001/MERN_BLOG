import './sidebar.css'
// import { BsFacebook } from 'react-icons/bs'
// import { AiFillTwitterCircle } from 'react-icons/ai'
// import { BsPinterest } from 'react-icons/bs'
// import { GrInstagram } from 'react-icons/gr'
import me from '../../assets/binary.jpg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> About Me </span>
        <img src={me} alt="About" />
        <p className='aboutDesc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit fugiat dolor nulla nemo dolorem animi obcaecati
          voluptatum eaque, soluta at quis tempora qui, voluptates rerum eum
          repellendus molestias numquam illum. At eos possimus, harum deleniti,
          soluta dolore praesentium ipsa tenetur neque libero hic eaque ducimus.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle"> Categories </span>
        <ul className="sidebarList">
          <li className="sidebarListItem"> Tech </li>
          <li className="sidebarListItem"> Life </li>
          <li className="sidebarListItem"> Style </li>
          <li className="sidebarListItem"> Sport </li>
          <li className="sidebarListItem"> Music </li>
          <li className="sidebarListItem"> Cinema </li>
        </ul>
      </div>

      {/* <div className="sidebarItem">
        <span className="sidebarTitle"> Follow Us </span>
        <div className="sidebarSocial">
          <BsFacebook className="icon sidebarIcon" />
          <AiFillTwitterCircle className="icon sidebarIcon" />
          <BsPinterest className="icon sidebarIcon" />
          <GrInstagram className="icon sidebarIcon" />
        </div>
      </div> */}
    </div>
  )
}

export default Sidebar
