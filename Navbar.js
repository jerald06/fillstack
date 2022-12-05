import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#e3fefd"}}>
        <div class="container-fluid">



            <button class="navbar-toggler" type='button'
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls='navbarNav'
            aria-expanded="false" aria-label='Toggle navigation'>
                <span class="navbar-toggler-icon"></span>

            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href='/'>Posts</a>
                    </li>
                </ul>

            </div>

        </div>
      </nav>
    )
  }
}
