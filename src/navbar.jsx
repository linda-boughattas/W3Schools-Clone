import './navbar.css'
import W3Schools from './assets/W3Schools_logo.png'

export default function Navbar(){
    return(
            <nav class="navbar-default">
                    <div class="navbar-header">
                    <a class="navbar-brand" href="#"><img src={W3Schools}></img></a>
                    </div>
                    <ul class="navbar-nav">
                    <li><a href="#">Tutorials</a><i class="fa fa-caret-down"></i></li>
                    <li><a href="#">References</a><i class="fa fa-caret-down"></i></li>
                    <li><a href="#">Exercies</a><i class="fa fa-caret-down"></i></li>
                    </ul>
                <div className="navbar-login">
                    <a href="#">Paid Courses</a>
                    <button>Log in</button>
                </div>
            </nav>
    )
}