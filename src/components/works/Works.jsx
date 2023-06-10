import "./works.scss"

export default function Works() {
    return (
        <div className="works" id="works">
               <div className="container left">
                <div className="date">Apr,2023 - Pres</div>
                <img src="assets/joolba.jpg" alt="NITA" className="icon"/>
                <div className="content">
                    <h2>React Developer at JOOLBA MEDIA</h2>
                    <p>-Building <b>strong Media News Application</b>For Nigerian People</p>
                    <p>-Joolba is not just a news website. it is a revolutionary product for Nigerian </p>
                </div>
            </div>
               <div className="container right">
                <div className="date">Sep,2022 - May,2023</div>
                <img src="assets/s2pLogo.jpg" alt="NITA" className="icon"/>
                <div className="content">
                    <h2>FrontEnd Developer at S2P EDUTECH PVT LTD</h2>
                    <p>-Building <b>Responsive Applications And  Websites</b></p>
                    <p>-Providing Best Quality Services for Clients</p>
                </div>
            </div>
            <div className="container left">
                <div className="date">Sep,2021 - 2022</div>
                <img src="assets/gpgLogo.jpg" alt="NITA" className="icon"/>
                <div className="content">
                    <h2>Internship Coordinator at GPG Mohgaon</h2>
                    <p>-Building <b>strong relationship</b> with companies</p>
                    <p>-Providing internships oppurtunity to students</p>
                </div>
            </div>

        </div>
    )
}
