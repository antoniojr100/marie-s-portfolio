import './App.css';

function Header(){
    return(
        <header id="header">
            <div className="wrapper">
                <h1 id="main-header">Mary Elizabeth</h1>

                <nav id="nav-bar">
                    <ul>
                        <li>
                            <a class="nav-item" href="#about">About Me</a>
                        </li>
                        <li>
                            <a class="nav-item" href="#art">My Art</a>
                        </li>
                        <li>
                            <a class="nav-item" href="#contact">Contact Me</a>
                        </li>
                        <li>
                            <a class="nav-item" 
                                href="https://linktr.ee/Honeyyslut" 
                                rel="noreferrer"
                                target="_blank"
                                >My Links</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;