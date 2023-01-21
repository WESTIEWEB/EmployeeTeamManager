import {Link} from "react-router-dom";

const Nav = () => {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"></li>
          <Link className="nav-link hoverme" to="/">
            Home
          </Link>
        <li className="nav-item">
          <Link className="nav-link hoverme" to="GroupedTeamMembers">
            Teams
          </Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Nav;