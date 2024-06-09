function Navbar(){
    return (
        <div className="navbar" >
          <div className="logo" id="home">
            <a href="#home">Lets Travel Kashmir</a>
            </div>
          <ul className="nav-links">
            <li><a href="#popular-destinations">Popular Destinations</a></li>
            <li><a href="#tour-packages">Travel With Us</a></li>
            <li><a href='#contact-us'>Contact Us</a></li>
          </ul>
        </div>
      );
}

export default Navbar;