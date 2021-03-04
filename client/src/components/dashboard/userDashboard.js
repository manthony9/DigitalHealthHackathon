import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../action/authActions";
import QRCode from "react-qr-code";
import moment from "moment";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hey </b> {user.name.split(" ")[0]}
              <b>! </b>
              <p className="flow-text grey-text text-darken-1">
                Here's your QR Code!{" "}
                <span style={{ fontFamily: "MONTSERRAT" }}></span>
              </p>
              <div>
                <QRCode value={user.uri} />
              </div>
              <p className="flow-text grey-text text-darken-1">
                <b>Your latest vaccination was on </b>
                {moment(user.date).format("MM-DD-YYYY")}
                <span style={{ fontFamily: "MONTSERRAT" }}></span> 👏
              </p>
            </h4>

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              id="butt"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
