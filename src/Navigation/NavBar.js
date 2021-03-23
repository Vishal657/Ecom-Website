import React, { useState } from 'react'
import Logo from '../Assets/Logo.jpg'
import "./NavBar.css";

const NavBar = (props) => {
    const [enteredText,setEnterdedText] = useState(null)
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light navigation-bar">
            <div className="container-fluid">
                <a className="navbar-brand mx-md-auto" href="/">
                    <img src={Logo} width="50" height="50" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="form-inline my-2 my-lg-0 ml-auto">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
                        onChange={(e)=>setEnterdedText(e.target.value)}/>
                        <button className="btn btn-outline-success my-2 my-sm-0"
                        onClick={(e)=>{
                            e.preventDefault()
                            props.setSearched(enteredText)}}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;