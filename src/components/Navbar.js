import React, { Component } from 'react'
import{Link} from 'react-router-dom';

export class Navbar extends Component {
  render() {
    let {toggleMode, mode, textColor} = this.props
    return (
      <div>
        <nav className={`navbar navbar-expand-lg bg-${mode}`}>
          <div className="container-fluid">
            <Link className={`navbar-brand text-${textColor}`} to="/">NewMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                 <Link className={`nav-link active text-${textColor}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${textColor}`} to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${textColor}`} to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${textColor}`} to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${textColor}`} to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${textColor}`} to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-${textColor}`} to="/technology">Technology</Link>
                </li>
            </ul>
            </div>
        </div>
        <div className="mx-2 d-flex gap-2">
          <button className={`btn btn-dark border border-2 border-${textColor} align-self-center`} onClick={toggleMode} style={{width:  "30px", height: "30px"}}></button>
          <input type="text" className="px-2 mx-1 border border-2 border-light" placeholder='Search' />
          <Link className={`nav-link text-${textColor}`} to="/search" onClick={this.props.searchFunc}>Search</Link>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar