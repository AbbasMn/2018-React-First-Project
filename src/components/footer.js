import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="bg-dark text-white">
            <footer className="page-footer font-small mdb-color lighten-3 pt-4" >
          {/* <!-- Footer Links --> */}
          <div className="container text-center text-md-left">
            {/* <!-- Grid row --> */}
            <div className="row">
              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                {/* <!-- Content --> */}
                <h5 className="font-weight-bold text-uppercase mb-4">
                  Footer Content
                </h5>
                <p>
                  Here you can use rows and columns to organize your footer
                  content.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit amet numquam iure provident voluptate esse quasi,
                  veritatis totam voluptas nostrum.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                {/* <!-- Links --> */}
                <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

                <ul className="list-unstyled">
                  <li>
                    <p>
                      <a href="#!">PROJECTS</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">ABOUT US</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">BLOG</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#!">AWARDS</a>
                    </p>
                  </li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                {/* <!-- Contact details --> */}
                <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> info@example.com
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-print mr-3"></i> + 01 234 567 89
                    </p>
                  </li>
                </ul>
              </div>
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
                {/* <!-- Social buttons --> */}
                <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

                {/* <!-- Facebook --> */}
                <a type="button" className="btn-floating btn-fb">
                  <i className="fab fa-facebook-f"></i>
                </a>
                {/* <!-- Twitter --> */}
                <a type="button" className="btn-floating btn-tw">
                  <i className="fab fa-twitter"></i>
                </a>
                {/* <!-- Google +--> */}
                <a type="button" className="btn-floating btn-gplus">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                {/* <!-- Dribbble --> */}
                <a type="button" className="btn-floating btn-dribbble">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
          {/* <!-- Footer Links --> */}

          {/* <!-- Copyright --> */}
          <div className="footer-copyright text-center py-3">
            © 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              MDBootstrap.com
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
            {/* <!-- Footer --> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
