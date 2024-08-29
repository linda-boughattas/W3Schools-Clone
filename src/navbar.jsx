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
                    <li><a href="#">Exercices</a><i className="fa fa-caret-down"></i></li>
                    </ul>
                <div className="navbar-login">
                    <button className="button white">Paid Courses</button>
                    <button className="button green">Log in</button>
                </div>
            </nav>
    )
}