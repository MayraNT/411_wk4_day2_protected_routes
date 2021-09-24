import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    console.log("cookies", cookies);

    return cookies["loggedIn"] ? true : false;
}

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;

    console.log("props", props)
    console.log("rest", rest)

    return (
      <Route
        {...rest}
        render={(props) => checkAuth() === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
}
// Line 27: spread the rest of the props that are needed in this component
// Line 28: define the value of the render method as a ternary that checks to see if checkAuth returns true or false
// Line 29: if true render the component with all the props
// Line 30: if false, use the Redirect component to update the url to `/login` so they are redirected to the login component


const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/car/:id" component={Car} />
        </Switch>
    );
};

export default Router;