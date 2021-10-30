import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {Redirect, Route, Switch} from "react-router-dom"
import Home from "./page/Home/Home"
import ContactUs from "./page/contactUs/contactUs"
import AboutUs from "./page/aboutUs/aboutUs"
import PostDetails from "./page/postDetails/postDetails"
import notFoundPage from "./page/404Page/404Page"
import Blog from "./page/blog/blogPage"
import LoginRegisterPage from "./page/auth/loginRegisterPage"
import {ToastContainer} from "react-toastify"
import React from "react";


function App() {
  return (
    <div>
      <Header/>
      <ToastContainer/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route sensitive path="/contact-us" component={ContactUs}/>
        <Route sensitive path="/about-us" component={AboutUs}/>
        <PrivateRoute exact sensitive path={'/blog'} component={Blog}/>
        <Route sensitive path={'/blog/:name'} component={PostDetails}/>
        <PublicRoute sensitive path="/login" component={LoginRegisterPage}/>
        <Route sensitive component={notFoundPage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

function isLogin() {
  return !!localStorage.getItem('token')
}

function PublicRoute({component, ...props}) {
  return <Route {...props} render={(data) => {
    if (isLogin()) {
      return <Redirect to={'/'}/>
    } else {
      return React.createElement(component, data)
    }
  }
  }/>

}

function PrivateRoute({component, ...props}) {
  return <Route {...props} render={data => {
    if (isLogin()) {
      return React.createElement(component, data)
    } else {
      return <Redirect to={'/login'}/>
    }
  }
  }
  />
}

export default App;
