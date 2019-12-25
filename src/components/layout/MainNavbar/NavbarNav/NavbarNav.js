import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import SignUp from "./SignUp";
import PropTypes from "prop-types";
import Login from "./Login";

const TopNavbar = ({ loggedIn }) => (
  <Nav navbar className="border-left flex-row">
  {loggedIn &&  <Notifications />}
  {loggedIn && <UserActions />}
  {!loggedIn && <SignUp /> }
  {!loggedIn &&<Login /> }
  </Nav>
);

TopNavbar.propTypes = {
  /**
   * Whether the user is logged in, or not.
   */
  loggedIn: PropTypes.bool
};

TopNavbar.defaultProps = {
  loggedIn: false
};
export default TopNavbar;