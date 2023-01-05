import React, { Component } from "react";


class NavBar extends Component {
  render() {
    return (
      // replace className= with classname=

      <React.Fragment>
        {/* <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                    <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
                    <ul className="navbar-nav px-3">
                        <li className="nav-item text-nowrap">
                            <a className="nav-link" href="#">Sign out</a>
                        </li>
                    </ul>
                </nav> */}

        {/* <div class="nav-scroller py-1 mb-2">
                <nav class="nav d-flex justify-content-between">
                    <a class="p-2 text-muted" href="#">World</a>
                    <a class="p-2 text-muted" href="#">U.S.</a>
                    <a class="p-2 text-muted" href="#">Technology</a>
                    <a class="p-2 text-muted" href="#">Design</a>
                    <a class="p-2 text-muted" href="#">Culture</a>
                    <a class="p-2 text-muted" href="#">Business</a>
                    <a class="p-2 text-muted" href="#">Politics</a>
                    <a class="p-2 text-muted" href="#">Opinion</a>
                    <a class="p-2 text-muted" href="#">Science</a>
                    <a class="p-2 text-muted" href="#">Health</a>
                    <a class="p-2 text-muted" href="#">Style</a>
                    <a class="p-2 text-muted" href="#">Travel</a>
                </nav>
            </div> */}

        <header>
          <nav class="navbar navbar-expand-md navbar-dark  bg-dark">
            {" "}
            {/* fixed-top */}
            <a class="navbar-brand" href="#">
              Carousel
            </a>{" "}
            <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
              <form class="form-inline mt-2 mt-md-0">
                <input
                  class="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default NavBar;
