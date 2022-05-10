import './home.css';

import img from '../props/super-man1111.jpg';
import { BsMouse } from 'react-icons/bs';

import Button from '../button/button';

function Home() {
  return (
    <div id='home' className='container home-container'>
        <div className='logo'>
            <div className='hover-show'>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
            </div>
            <img src={img} alt='' />
        </div>

        <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll'/>
        </a>
        
        <h2>
            <span> About me</span>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsum cum similique facilis impedit animi suscipit deserunt dolorem expedita beatae, quae provident nesciunt atque vitae delectus minima temporibus, nisi porro.</p>
        </h2>
        <Button/>
    </div>
  )
}

const toggle = document.querySelector(".hover-show");
console.log(toggle);

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

// const toggle = document.querySelector('.main-img');
// toggle.addEventListener('click', () => {
//     toggle.classList.toggle('active')
// })
console.log(toggle);

export default Home
