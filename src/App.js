import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {Route, Switch} from "react-router-dom"
import Home from "./page/Home/Home"
import ContactUs from "./page/contactUs/contactUs"
import AboutUs from "./page/aboutUs/aboutUs"
import PostDetails from "./page/postDetails/postDetails"
import notFoundPage from "./page/404Page/404Page"
import Blog from "./page/blog/blogPage"
import LoginRegisterPage from "./page/loginRegister/loginRegisterPage"


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route sensitive path="/contact-us" component={ContactUs}/>
        <Route sensitive path="/about-us" component={AboutUs}/>
        <Route exact sensitive path={'/blog'} component={Blog}/>
        <Route sensitive path={'/blog/:name'} component={PostDetails}/>
        <Route sensitive path="/login" component={LoginRegisterPage}/>
        <Route sensitive component={notFoundPage}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
