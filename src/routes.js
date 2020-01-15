import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import Question from "./views/common/Dashboard";
import ViewQuestion from "./views/common/View-question";
import AddQuestion from "./views/common/Add-question";
import Errors from "./views/Errors";
import Categories from "./views/common/Categories";
import Tables from "./views/Tables";
import Example from "./views/Area55";
import Tags from "./views/common/Tags";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/questions" />
  },
  {
    path: "/questions",
    layout: DefaultLayout,
    component: Question
  },
  {
    path: "/question/:id",
    layout: DefaultLayout,
    component: ViewQuestion
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddQuestion
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: Categories
  },
  {
    path: "/area55",
    layout: DefaultLayout,
    component: Example
  },
  {
    path: "/tags",
    layout: DefaultLayout,
    component: Tags
  }
];
