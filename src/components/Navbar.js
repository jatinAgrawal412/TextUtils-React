import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>
                        <form className="d-flex me-auto" role="search">
                        </form>
                        {/* <div className="d-flex">
                            <div className={`bg-primary rounded mx-2 text-${props.mode === 'light' ? 'dark': 'light'}`} style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode("primary")}}></div>
                            <div className={`bg-danger rounded mx-2 text-${props.mode === 'light' ? 'dark': 'light'}`} style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode("danger")}}></div>
                            <div className={`bg-success rounded mx-2 text-${props.mode === 'light' ? 'dark': 'light'}`} style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode("success")}}></div>
                            <div className={`bg-warning rounded mx-2 text-${props.mode === 'light' ? 'dark': 'light'}`} style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode("warning")}}></div>
                            <div className={`bg-dark rounded mx-2 text-${props.mode === 'light' ? 'dark': 'light'}`} style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode("dark")}}></div>
                            <div className={`bg-light rounded mx-2 text-${props.mode === 'light' ? 'dark': 'light'}`} style={{height:'30px',width:'30px', cursor:'pointer'}} onClick={()=>{props.toggleMode("light")}}></div>
                        </div> */}
                        <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark': 'light'}`} >
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode(null)}}/>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
}
Navbar.defaultProps = {
    aboutText: 'About',
}