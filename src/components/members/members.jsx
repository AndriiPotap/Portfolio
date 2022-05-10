import './members.css';

import React from 'react'

function Members() {
  return (
    <div id='members' className='container members-container'>
        <h1 className='members-txt'>Members</h1>

        <div className="member member-1">
            <div className="member-img"></div>
            <div className="member-info">
                <h1 className='name'>Andrii</h1>
                <h3 className='position'>Junior Web Dev</h3>
                <h4 className='abot'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum ea officia, unde neque repudiandae nam. Nesciunt accusantium at magnam sequi reprehenderit. Earum deserunt temporibus pariatur beatae sint mollitia maxime.</h4>
                <a href="#contact" className='contact-member'>
                    <span>contact</span>
                </a>
            </div>
        </div>

        <div className="member member-2">
            <div className="member-img"></div>
            <div className="member-info">
                <h1 className='name'>Andrii</h1>
                <h3 className='position'>Junior Web Dev</h3>
                <h4 className='abot'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum ea officia, unde neque repudiandae nam. Nesciunt accusantium at magnam sequi reprehenderit. Earum deserunt temporibus pariatur beatae sint mollitia maxime.</h4>
                <a href="#contact" className='contact-member'>
                    <span>contact</span>
                </a>
            </div>
        </div>

        <div className="member member-3">
            <div className="member-img"></div>
            <div className="member-info">
                <h1 className='name'>Andrii</h1>
                <h3 className='position'>Junior Web Dev</h3>
                <h4 className='abot'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem voluptatum ea officia, unde neque repudiandae nam. Nesciunt accusantium at magnam sequi reprehenderit. Earum deserunt temporibus pariatur beatae sint mollitia maxime.</h4>
                <a href="#contact" className='contact-member'>
                    <span>contact</span>
                </a>
            </div>
        </div>

    </div>
  )
}

export default Members