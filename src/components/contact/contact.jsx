import './contact.css';

import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';


function Contact() {
  return (
    <div id='contact' className='container contact-container'>
        <h1>Contact me</h1>
        <div className="contact-links">

            <a href="https://www.linkedin.com/in/andrii-potapenko-566a63204/" className='contact linked' target={"_blank"}>
                <AiFillLinkedin className='icon icon-link'/>
                <h2>linkedin
                    <span>Conecting people</span>
                </h2>
            </a>

            <a href="https://web.telegram.org/k/" className='contact telegtam' target={"_blank"}>
                <FaTelegramPlane className='icon icon-link'/>
                <h2>telegram
                    <span>is avesome</span>
                </h2>
            </a> 
            
             <a href="https://www.instagram.com/apa_ko/" className='contact instagram' target={"_blank"}>
                <AiOutlineInstagram className='icon icon-link'/>
                <h2>instagram
                    <span>Creative ambition</span>
                </h2>
            </a>

        </div>
    </div>
  )
}

export default Contact