function Header() {
    return (
        <header>
            <h1>Dev</h1>
            <div className="navigation">
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
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
        </header>
    )
}

export default Header;