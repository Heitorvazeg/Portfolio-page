import "./header.css"

function Header() {
    return (
        <header>
            <h1>Dev</h1>
            <div className="links">
                <div className="navigation">
                    <a href="#home"><p>Home</p></a>
                    <a href="#skills"><p>Skills</p></a>
                    <a href="#projects"><p>Projects</p></a>
                </div>
                <div className="social">
                    <button className="buttonH">
                        <a href="https://www.linkedin.com/in/heitor-vaz-657a00354/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    </button>
                    <button className="buttonH">
                        <a href="https://github.com/Heitorvazeg" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </button>
                    <button className="buttonH">
                        <a href="https://leetcode.com/u/HeitorVaz/" target="_blank"><i class="fa-solid fa-code"></i></a>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;