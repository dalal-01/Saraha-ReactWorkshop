import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar({loginData , logout}) {
  return (
  <>
<nav className="navbar navbar-expand-lg bg-custom navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src="img/logo300.png" width={54} /> </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      Menu <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        {loginData?
        <>
        <li className="nav-item">
              <Link  className="nav-link" to="Users">Users</Link>
        </li>
        <li className="nav-item">
              <Link  className="nav-link" to="Messages">Messages</Link>
        </li>
        <li className="nav-item">
              <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
        </li>
        </>
        :
        ''
        }
      </ul>

      <ul className="navbar-nav ms-auto">
        {!loginData? 
        <>
        <li className="nav-item">
          <Link  className="nav-link" to="Users">Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">
            Register
          </Link>
        </li>
        </>
        :
        ''
      }
      </ul>
    </div>
</div>
</nav>

    
  </>
  )
}
