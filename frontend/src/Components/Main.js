import React, { Component } from 'react';
import Header from './Header/Header';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import Auth from './Auth/Auth';
import Logout from './Auth/Logout';
import Home from './home/home';

import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { authCheck } from '../redux/authActionCreators';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
    }
}

class Main extends Component {
    componentDidMount() {
        this.props.authCheck();
    }
    render() {
        let routes = null;
        if (this.props.token === null) {
            routes = (
                <Switch>
                    <Route path="/login" component={Auth} />
                    <Redirect to="/login" />
                </Switch>
            )
        } else {
            routes = (
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/orders-history' component={Orders} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/logout" component={Logout} />
                    <Route path='/burger-builder' component={BurgerBuilder} />
                    <Redirect from='/' to='/home' />
                </Switch>
            )
        }
        return (
            <div style={{ height: "100vh" }}>
                <Header />
                <div className="container">
                    {routes}
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);