import React, {useEffect} from "react";
import {Route, Redirect, Switch, BrowserRouter} from "react-router-dom";

import NavigationSite from "./Components/Home-Navigation/NavigationSite";
import Calendar from "./Components/Calendar/Calendar";
import UserProfile from "./Components/User-AdminProfile/UserProfile";
import AdminProfile from "./Components/User-AdminProfile/AdminProfile";
import TermsAndConditions from "./Components/TermsAndConditions";
import LoginForm from "./Components/common/LoginForm";
import RegisterForm from "./Components/common/RegisterForm";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import UserProvider from "./contexts/UserProvider";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Components/common/ProtectedRoute";
import ErrorBoundary from "./Components/common/ErrorBoundary";
import ToastProvider from "./contexts/ToastProvider";
import {ToastContainer} from "react-toastify";
import LoadingProvider from "./contexts/LoadingProvider";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <LoadingProvider>
          <UserProvider>
            <ToastProvider>
              <ToastContainer />
              <Switch>
                <Route path="/termsconditions" component={TermsAndConditions}></Route>
                <Route path="/calendar" component={Calendar} />
                <ProtectedRoute path="/adminprofile" component={AdminProfile} />
                <ProtectedRoute path="/userprofile" component={UserProfile} />
                <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
                <Route path="/login" component={LoginForm}></Route>
                <Route path="/register" component={RegisterForm}></Route>
                <Route path="/home" component={NavigationSite}></Route>
                <Redirect from="/" to="/home"></Redirect>
              </Switch>
            </ToastProvider>
          </UserProvider>
        </LoadingProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
