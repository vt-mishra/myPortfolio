import { useRef, useState } from "react";
import { GitHub, LinkedIn, Mail } from '@material-ui/icons'
import "./contact.scss";
import { CircularProgress } from "@material-ui/core";


export default function Contact() {
    const [message, setMessage] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const name = useRef();
    const email = useRef();
    const msg = useRef();
    console.log(process.env.REACT_APP_MAIL_URL);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name && email) {
            setIsFetching(true);
            try {
                await fetch(`https://${process.env.REACT_APP_MAIL_URL}`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name.current.value,
                        email: email.current.value,
                        msg: msg.current.value
                    })
                })
                .then((res) => res.json())
                .then((jason) => {
                    console.log(jason)
                    setIsFetching(false);
                    setMessage(true);
                    setTimeout(() => {
                        setMessage(false);
                    }, 3000);
                })
            } catch (err) {
                setIsFetching(false);
                alert("Some error occurred..!")
            }
        }
    }
    return (
        <div className="contact" id="contact">

            <div className="container">
                <div className="topContainer">

                    <a className="item email">
                        <Mail className="icon"/>
                        <h3>Email me</h3>
                        <p>vatanrajamishra@gmail.com</p>
                    </a>

                    <a href="https://www.linkedin.com/in/vatan-mishra-1961b61a4/" className="item linkedin" rel="noreferrer" target="_blank">
                        <LinkedIn className="icon"/>
                        <h3>Connect with Me</h3>
                        <p>linkedin.com/in/vatan-mishra/</p>
                    </a>

                    <a href="https://github.com/vt-mishra" className="item github" rel="noreferrer" target="_blank">
                        <GitHub className="icon"/>
                        <h3>Watch my activity</h3>
                        <p>github.com/vt-mishra</p>
                    </a>

                </div>

                <div className="bottomContainer">
                    <div className="imgContainer">
                        <img src="assets/contact.jpg" alt=""/>
                    </div>
                    <div className="formContainer">
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name"
                                ref={name}
                                required
                            />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                required
                                ref={email}
                            />
                            <textarea 
                                name="message" 
                                placeholder="Write your message here.."
                                ref={msg}
                            />
                            <button type="submit">
                                {isFetching 
                                    ? <CircularProgress size="15px" color="white"/> 
                                    : "Send"
                                }
                            </button>
                            {message && <span>Thanks for your lovely message ❤</span>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}





