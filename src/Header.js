import './App.css';

function Header(){
    return(
        <header id="header">
            <div className="wrapper">
                <h1 id="main-header">Mary's Portfolio</h1>

                <nav id="nav-bar">
                    <ul>
                        <li class="nav-item" >
                            <a class="nav-item" href="#about">About Me</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-item" href="art">My Art</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-item" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;