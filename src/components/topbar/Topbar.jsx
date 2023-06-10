import { GitHub, LinkedIn, Mail } from "@material-ui/icons"
import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">vatan_m</a>
                    
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/vatan-mishra-1961b61a4/" rel="noreferrer" target="_blank">
                            <LinkedIn className="icon"/>
                            <span>linkedin.com/in/vatan-mishra</span>
                        </a>
                    </div>

                    <div className="itemContainer">
                        <a href="#0" style={{cursor: "default"}}>
                            <Mail className="icon"/>
                            <span>vatanrajamishra@gmail.com</span>
                        </a>
                    </div>

                    <div className="itemContainer">
                        <a href="https://github.com/vt-mishra" rel="noreferrer" target="_blank">
                            <GitHub className="icon"/>
                            <span>github.com/vt-mishra</span>
                        </a>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
