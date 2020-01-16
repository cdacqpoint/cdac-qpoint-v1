import React from "react";
import {
  Form,
} from "shards-react";
import SearchPost from '../../common/SearchPost'

export default () => (
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <SearchPost />
  </Form>
);
