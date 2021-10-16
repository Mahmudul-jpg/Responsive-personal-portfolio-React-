import './Introduction.styles.css';
// import Button from 'react-bootstrap/Button'
// import { Button } from 'react-bootstrap'
import Hello from '../images/hello.jpeg'
const Introduction = () => {
    return (
        <div className="intro">

            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h3 className="intro-start">Hello,My name is </h3>
                    <h2 className="intro-name"><strong>Mahmudul Hasan</strong></h2>

                    <div className="intro-title">
                        <div className="intro-title-wrapper">

                            <div className="intro-title-item">Web developer</div>
                            <div className="intro-title-item">Computer Science Graduate</div>
                            <div className="intro-title-item">Basketball Player</div>
                        </div>
                    </div>



                    <div className="des">
                        I like to solve problems.I am Mern Stack Web Developer.Currently I working on React.js
                    </div>

                </div>
            </div>
            <div className="intro-right">
                <img src={Hello} alt='' className="image" />
            </div>


            {/* <div className="intro-right"><Button>Click</Button></div> */}
        </div>
    )
}

export default Introduction


