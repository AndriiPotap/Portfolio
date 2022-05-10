import './qualification.css';



function Qualification() {
  return (
    <div>
        <span className='quali-text'>My qualification</span>
        <div className="qualification-container">
            <div className="qualification">
                <div className="content html"></div>
                <h1>html</h1>
            </div>

            <div className="qualification">
                <div className="content css"></div>
                <h1>css</h1>
            </div>

            <div className="qualification">
                <div className="content javascript"></div>
                <h1>javascript</h1>
            </div>

            <div className="qualification">
                <div className="content react"></div>
                <h1>react</h1>
            </div>

            <div className="qualification">
                <div className="content bootstrap"></div>
                <h1>bootstrap</h1>
            </div>

            <div className="qualification">
                <div className="content nodejs"></div>
                <h1>nodejs</h1>
            </div>

            <div className="qualification">
                <div className="content redux"></div>
                <h1>redux</h1>
            </div>
        </div>
    </div>
  )
}

export default Qualification