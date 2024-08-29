import './navbar.css'
import W3Schools from './assets/W3Schools_logo.png'

export default function Navbar(){
    return(
            <nav className="navbar-default">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#"><img src={W3Schools}></img></a>
                    </div>
                    <ul className="navbar-nav">
                    <li><a href="#">Tutorials</a><i className="fa fa-caret-down"></i></li>
                    <li><a href="#">References</a><i className="fa fa-caret-down"></i></li>
                    <li><a href="#">Exercies</a><i className="fa fa-caret-down"></i></li>
                    </ul>
                <div className="navbar-login">
                    <button className="button white"><a target="_blank" href="https://campus.w3schools.com/collections/course-catalog">Paid Courses</a></button>
                    <button className="button green"><a href="https://profile.w3schools.com/login?redirect_url=https%3A%2F%2Fwww.w3schools.com%2F">Log in</a></button>
                </div>
            </nav>
    )
}