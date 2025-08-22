import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JS bundle important
import { Link } from 'react-router-dom'

const Navbar = ({Current_user}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/admin' className="nav-link active" aria-current="page">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/user' className="nav-link active" aria-current="page">User</Link>
                    </li>
                    {
                        Current_user === 'admin' ?
                        <li className="nav-item">
                        <Link to='/user' className="nav-link active" aria-current="page">Dashboard</Link>
                    </li>
                    : <></>
                    }
                    
                </ul>
                {Current_user }
            </div>
        </nav>
    )
}

export default Navbar