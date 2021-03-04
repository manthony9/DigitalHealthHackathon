import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        {" "}
        <footer class="page-footer" style={{ height: "18vh" }}>
          <div class="container">
            <div class="row">
              <div class="col">
                <h5 class="center-align" style={{ paddingLeft: "450px" }}>
                  Digital Health Hackathon
                </h5>
              </div>
            </div>
          </div>
          <div class="footer-copyright" style={{ textAlign: "center" }}>
            <div class="container">© 2021 Team Galaxy Brain Debuggers</div>
          </div>
        </footer>
      </>
    );
  }
}
export default Footer;
