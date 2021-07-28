import React from "react";
import { Route, Switch } from "react-router-dom";

import DashBoard from "../pages/Dashboard";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/About";
import Layout from "../components/Layout"

import UsersList from "../pages/Users/userslist"
import UserDetails from "../pages/Users/userDetails"
import UserAdd from "../pages/Users/userAdd"
import UserEdit from "../pages/Users/userEdit"

const Routes = () => {
  return (
    <Layout>
    <Switch>
      <Route exact path="/" component={DashBoard} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/aboutus" component={AboutUs} />

      <Route exact path="/users" component={UsersList} />
      <Route exact path="/adduser" component={UserAdd} />
      <Route exact path="/users/:id" component={UserDetails} />
      <Route exact path="/users/edit/:id" component={UserEdit} />
    </Switch>
    </Layout>
  );
};

export default Routes;
