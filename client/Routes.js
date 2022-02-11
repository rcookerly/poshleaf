import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import { LoginPage, SignupPage } from "./components/AuthPage";
import Home from "./components/Home";
import Main from "./components/HomePage/Main";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { me } from "./store";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Main} />
            <Route path="/profile" component={Main} />
            <Route path="/orders" component={Main} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/cart" component={Signup} />
          </Switch>
        )}
        <Route path="/" exact component={Main} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:slug" component={ProductDetails} />
        <Route path="/view/:role" component={Signup} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
