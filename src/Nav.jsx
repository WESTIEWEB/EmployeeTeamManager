import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" style={{textDecoration: "none"}}><a class="navbar-brand" >Navbar</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to="/" style={{textDecoration: "none"}}>
          <a class="nav-link" >Home <span class="sr-only"></span></a>
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/GroupedTeamMembers" style={{textDecoration: "none"}}>
          <a class="nav-link" >Teams</a>
        </Link>
      </li>
      
    </ul>
  </div>
</nav>
  )
}

export default Nav;