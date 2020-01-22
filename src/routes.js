import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Question from "./views/common/Dashboard";
import ViewQuestion from "./views/common/View-question";
import AddQuestion from "./views/common/Add-question";
import Errors from "./views/Errors";
import Categories from "./views/common/Categories";
import Example from "./views/Area55";
import Tags from "./views/common/Tags";
import Login from "./views/common/Login";
import Registration from "./views/common/Registration";
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
    path: "/categories",
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
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/register",
    layout: DefaultLayout,
    component: Registration
  },

];
