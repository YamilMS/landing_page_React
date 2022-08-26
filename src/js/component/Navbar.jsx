import React from "react";
import { ReactPropTypes } from "react";

const NavBar= ()=>{
	return <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
	<a className="navbar-brand mx-5" href="#">Start Bootstrap</a>
	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  <span className="navbar-toggler-icon"></span>
	</button>
  
	<div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
	  <ul className="navbar-nav mr-auto">
		<li className="nav-item active">
		  <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" href="#">Services <span className="sr-only">(current)</span></a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
		</li>
	  </ul>
	</div>
  </nav>
}


export default NavBar