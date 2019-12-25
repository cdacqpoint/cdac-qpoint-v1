import React from "react";
import { Link } from "react-router-dom";
import {
    NavItem,
    NavLink
} from "shards-react";


export default class SignUpNav extends React.Component {
    render() {
        return (
            <NavItem className="nav-item border-right">
                <NavLink
                    className="nav-link text-nowrap px-4 link-button"
                    tag={Link} to="user-profile">
                    <i class="material-icons mr-2">person_add</i>
                    <span class="d-none d-md-inline-block">Sign up</span>
                </NavLink>
            </NavItem>
            );
    }
}