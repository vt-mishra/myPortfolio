import { ArrowDownward, GetApp } from "@material-ui/icons"
import "./intro.scss"
import { init } from "ityped"
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            typeSpeed: 110,
            backDelay: 1500,
            backSpeed: 50,
            strings: ["I'm a Front End Web Developer", "Converting Dream into Code", "Love to learn new Skills", "Currently diving in React Native"]
        })
    }, []);

    const handleClick = () => {
        window.location.href = "https://drive.google.com/file/d/1WRa-jj6IniBHHW-eFNwfUM9Tm64-i8RG/view?usp=drive_link"
    }

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile2.jpg" alt="profile"/>
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Vatan Mishra</h1>
                    <h3><span ref={textRef}></span></h3>
                    <button onClick={handleClick}><GetApp className="icon"/>Resume</button>
                </div>
                <a href="#projects">
                    <ArrowDownward className="downIcon" />
                </a>
            </div>
        </div>
    )
}
