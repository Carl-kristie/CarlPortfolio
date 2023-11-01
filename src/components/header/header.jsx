import  "./header.css"

function Header() {
    return ( 
        <>
        <header>
            <div className="header-container">
            <ul className="nav-list-h">
                <li className="nav-items">Home</li>
                <li className="nav-items">Services</li>
                <div className="logo">CK</div>
                <li className="nav-items">Projects</li>
                <li className="nav-items">Contact</li>
            </ul>
            </div>
        </header>
        </>
     );
}

export default Header;