import { DateRange, School } from "@material-ui/icons"
import { useState } from "react"
import EducationList from "../educationList/EducationList"
import "./education.scss"

export default function Education() {
    const [selected, setSelected] = useState(0);

    const list = [
        {
            id: 0,
            title: "Graduation (B.E)",
            name: "TGPCET, MOHGAON",
            branch: "Computer Science & Engineering",
            date: "Aug 18 - SEPT,2022",
            achievements: [
                "Internship Coordinator of CSE department",
                "Secured 8.37 SGPA",
                "Actively participated in Tech and Cultural festival"
            ],
            // markUrl: "https://drive.google.com/file/d/1I2vn5xU9YSwlp_2w1ATU4EoQoZfb_vud/view?usp=sharing"
        },
        {
            id: 1,
            title: "Intermediate(12th)",
            name: "SKV Butibori, Nagpur",
            branch: "Science Stream",
            date: "July, 16 - May, 18",
            achievements: [
                "Secured 62.66% marks",
                "Actively participated in Tech and Cultural festival"

            ],
            // markUrl: "https://drive.google.com/drive/my-drive"
        },
        {
            id: 2,
            title: "Merit(10th)",
            name: "SKV Butibori, Nagpur",
            branch: "Science Stream",
            date: " May, 16",
            achievements: [
                "Secured 89.6% marks",
                "Actively participated in Tech and Cultural festival"

            ],
            // markUrl: "https://drive.google.com/file/d/1-OPL3LERfqifYjBbF2__0IF5y1UNmHls/view?usp=sharing"
        }
    ]
// console.log(selected);
    return (
        <div className="education" id="education">
            <h1>Education</h1>
            <ul>
                {list.map(item => (
                    <EducationList 
                        title={item.title} 
                        id={item.id} 
                        key={item.id} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                <div className="box">
                    <div className="top">
                        <h2>{list[selected].name}</h2>
                    </div>
                    <div className="center">
                        <span className="item left"><School className="icon"/>{list[selected].branch}</span>
                        <span className="item right"><DateRange className="icon"/>{list[selected].date}</span>
                    </div>
                    <div className="bottom">
                        <h3>Acheivements</h3>
                        <ul>
                            {list[selected].achievements.map( a => (
                                <li>{a}</li>
                            ))}
                        </ul>
                    </div>
                    <button><a href={list[selected].markUrl} rel="noreferrer" target="_blank">Mark Statement</a></button>
                </div>
            </div>
        </div>
    )
}
