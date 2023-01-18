import {Link} from "react-router-dom";

const Nav = () => {
  return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link to="/" style={{textDecoration: "none"}}><a className="navbar-brand" >Navbar</a></Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <Link to="/" style={{textDecoration: "none"}}>
//           <a className="nav-link" >Home <span className="sr-only"></span></a>
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/GroupedTeamMembers" style={{textDecoration: "none"}}>
//           <a className="nav-link" >Teams</a>
//         </Link>
//       </li>
      
//     </ul>
//   </div>
// </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"></li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        <li className="nav-item">
          <Link className="nav-link" to="GroupedTeamMembers">
            Teams
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/not-found">
            About
          </Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default Nav;