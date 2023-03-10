import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerLeft">
            <h2 className="footerTitle"> Company </h2>

            <div className="footerList">
            <p className="footerItem"> About </p>
            <p className="footerItem"> Products & Services </p>
            <p className="footerItem"> Our Team </p>
            <p className="footerItem"> Terms & Conditions </p>
            <p className="footerItem"> Privay Policy </p>

            </div>
        </div>

        <div className="footerCenter">
            <h2 className="footerTitle"> Contact Us </h2>
            
            <div className="footerList">
            <p className="footerItem"> binarytech.com </p>
            <p className="footerItem"> BinaryTech </p>
            <p className="footerItem"> BinaryTech </p>
            <p className="footerItem"> info@binaryTech.com </p>
            <p className="footerItem"> (234) 905 934 3602 </p>
            </div>
        </div>

        <div className="footerRight">
            <h2 className="footerTitle"> Follow us </h2>
            
            <div className="iconsCon">
                <AiFillTwitterCircle />
                <BsFacebook />
                <BsPinterest />
                <GrInstagram />
            </div>
        </div>
    </div>
  )
}

export default Footer