import './footer.css';

import {BsMouse} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';

function Footer() {
  return (
    <div id='footer' className='container footer-container'>
        <h1>
            That`s all
            <a href="#home">
                <h2>
                    <BsMouse/>-scroll up
                </h2>
            </a>
        </h1>

        <div className="social-links">
            <a href="#">
                <AiOutlineInstagram className='social'/>
            </a>

            <a href="#">
                <FaFacebook className='social'/>
            </a>

            <a href="#">
                <FaTelegramPlane className='social'/>
            </a>

            <a href="#">
                <AiFillLinkedin className='social'/>
            </a>

            <a href="#">
                <AiFillGithub className='social'/>

            </a>
        </div>
    </div>
  )
}

export default Footer