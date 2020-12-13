import React from "react";
import {Route, Redirect, Switch, BrowserRouter} from "react-router-dom";

import NavigationSite from "./Components/Home-Navigation/NavigationSite";
import AboutMe from "./Components/AboutMe";
import Pricing from "./Components/Pricing";
import Lessons from "./Components/Lessons";
import Blog from "./Components/Blog/Blog";
import Calendar from "./Components/Calendar/Calendar";
import Contact from "./Components/Contact";
import UserProfile from "./Components/User-AdminProfile/UserProfile";
import AdminProfile from "./Components/User-AdminProfile/AdminProfile";
import TermsAndConditions from "./Components/TermsAndConditions";

import LoginForm from "./Components/common/LoginForm";
import RegisterForm from "./Components/common/RegisterForm";
import UserProvider from "./hooks/UserProvider";
import "./App.css";
import ProtectedRoute from "./Components/common/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Switch>
          <Route path="/termsconditions" component={TermsAndConditions}></Route>
          <Route path="/aboutme" component={AboutMe}></Route>
          <Route path="/lessons" component={Lessons}></Route>
          <Route path="/pricing" component={Pricing}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/calendar" component={Calendar} />
          <Route path="/contact" component={Contact}></Route>
          <ProtectedRoute path="/adminprofile" component={AdminProfile} />
          <ProtectedRoute path="/userprofile" component={UserProfile} />
          <Route path="/privacypolicy" component={UserProfile}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/main" component={NavigationSite}></Route>
          <Redirect from="/" to="/main"></Redirect>
        </Switch>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
