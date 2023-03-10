import "../css/global.css";
import "./HamburgerMenu.css";



export default function HamburgerMenu(){
    const menuToggle = () => {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    
    return (
        <div className="sticky">
            <div className="topnav" id="small-nav">
                <div>
                  hello
                </div>
                <div className="text-align-right" id="myLinks" onClick={menuToggle}>
                    <a href="#AboutMe">About</a>
                    <a href="#Experience">Experience</a>
                    <a href="#School">School</a>
                    <a href="#Certifications">Certifications</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                    <a href="CV-CarmeloScribano.pdf" target="_blank">Resume</a>
                </div>
                <a className="icon" onClick={menuToggle}>
                <svg width="3vh" height="3vh" fill="black" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </a>
            </div>
        </div>
    );
}