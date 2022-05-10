import './button.css';


function Button() {
  return (
    <div className='container button-container'>
        <a href="#about" className='btn pri'>
            Learn more
        </a>

        <a href="#contact" className='btr sec'>
            Get in Touch
        </a>
    </div>
  )
}

export default Button
