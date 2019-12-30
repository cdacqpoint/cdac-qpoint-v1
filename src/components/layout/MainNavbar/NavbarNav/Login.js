import React from "react";
import { Link } from "react-router-dom";
import {
    NavItem,
    NavLink
} from "shards-react";


export default class LoginNav extends React.Component {
    render() {
        return (
            <NavItem className="nav-item border-right">
                <NavLink
                    className="nav-link text-nowrap px-4 link-button"
                    tag={Link} to="user-profile">
                    <i className="material-icons mr-2">input</i>
                    <span className="d-none d-md-inline-block">Log in</span>
                </NavLink>
            </NavItem>
            );
    }
}