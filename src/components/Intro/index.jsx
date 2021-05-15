import { Jumbotron } from "react-bootstrap"
import classes from './intro.module.css'

const Intro = () => {
    return (
        <Jumbotron style={{textAlign: 'center'}}>
            <h1>Hello There !</h1>
            <p>
                This is a simple e commerce based web application made with Reactjs and Reduxjs.
            </p>
            <p>
                <a className={classes.link} href="/">Shop Now</a>
            </p>
        </Jumbotron>
    )
}

export default Intro
