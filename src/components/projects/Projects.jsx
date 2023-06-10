import { ArrowBackIos, ArrowForwardIos, Code, DeveloperMode } from "@material-ui/icons";
import { useState } from "react"
import ProjectList from "../projectList/ProjectList";
import "./projects.scss"

export default function Projects() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: (<Code className="icon"/>),   
            title: "Filmy-Verse Website",
            desc: [
                ":- Notes sharing website",
                ":- Used <b>Javascript and FireBase</b> stack",
                ":- Worked as a <b>FrontEnd Developer</b>, implemented , <b>Top performer</b>, <b>Search</b> etc. cool features",
            ],
            img: "assets/filmyverse.png",
            url: "https://github.com/vt-mishra/fimlyVerse"
        },
        {
            id: "2",
            icon: (<Code className="icon"/>),
            title: "Location Finder",
            desc: [
                ":- A simple Location Finder",
                ":- Used <b>HTML, CSS </b> JAVASCRIPT and also <b>API Binding</b>",
                ":- Working on implementing Location"
            ],
            img: "assets/locationFinder.webp",
            url: "https://github.com/vt-mishra/Location-Finder"
        },
        {
            id: "3",
            icon: (<DeveloperMode className="icon"/>),
            title: "React Chat App",
            desc: [
                ":- A simple chat application, compatible in android and ios both",
                ":- Used <b>React.Js</b> and <b>Chat Engine</b>",
                ":- Create profile, groups and chat in group",
                ":- Working on improved authentication, UI and other features"
            ],
            img: "https://user-images.githubusercontent.com/72190915/138616011-0c84ca57-91a3-4c50-99a7-9f26be633ae2.jpg",
            url: "https://github.com/vt-mishra/Chat-Application"
        },
        {
            id: "4",
            icon: (<DeveloperMode className="icon"/>),
            title: "HTR Clone App",
            desc: [
                ":- My Fist Hightech-Resister Company Clone",
                ":- Used <b>React and SCSS</b>",
                ":- Used <b>JSON Web Token (JWT)</b> at backend and <b>nodemailer</b> for feedback email",
                ":- Fully responsive"
            ],
            img: "assets/htrClone.png",
            url: "https://github.com/vt-mishra/resistor-company-app"
        },
        {
            id: "5",
            icon: (<DeveloperMode className="icon"/>),
            title: "Personal Portfolio",
            desc: [
                ":- My first personal portfolio",
                ":- Used <b>HTML, CSS, JS</b> and <b>ExpressJs</b>",
                ":- Fully responsive"
            ],
            img: "assets/portfolio2.png",
            url: "https://myportfolio-vatan24.herokuapp.com/"
        },
    ];

    const handleClick = (way) => {
        way === "left" 
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4)
            : setCurrentSlide(currentSlide < 4 ? currentSlide + 1 : 0)
    }

    return (
        <div className="projects" id="projects">
                    <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d => (
                    <ProjectList key={d.id} data={d}/>
                ))}
            </div>

            <ArrowBackIos className="arrow left" onClick={() =>  handleClick("left")} />
            <ArrowForwardIos className="arrow right" onClick={() =>  handleClick("right")} />
        </div>
    )
}
