import "./header.css";
import headerImg from '../../assets/4.jpg'

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm"> Binary Tech </span>
            <span className="headerTitleLg"> Blog </span>
        </div>
        
        <img src={headerImg} alt="Header" className="headerImg" />
    </div>
  )
}

export default Header