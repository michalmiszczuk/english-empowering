import React, {useEffect} from "react";
import {Route, Redirect, Switch, BrowserRouter} from "react-router-dom";

import AdminProfile from "./Components/User-AdminProfile/AdminProfile";
import Calendar from "./Components/Calendar/Calendar";
import NavigationSite from "./Components/Home-Navigation/NavigationSite";
import LoginForm from "./Components/common/LoginForm";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import RegisterForm from "./Components/common/RegisterForm";
import UserProfile from "./Components/User-AdminProfile/UserProfile";
import UserProvider from "./contexts/UserProvider";
import TermsAndConditions from "./Components/TermsAndConditions";

import ProtectedRoute from "./Components/common/ProtectedRoute";
import ErrorBoundary from "./Components/common/ErrorBoundary";
import ToastProvider from "./contexts/ToastProvider";
import LoadingProvider from "./contexts/LoadingProvider";
import {ToastContainer} from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
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
                <Route path="/home" component={NavigationSite}></Route>
                <Route path="/termsconditions" component={TermsAndConditions}></Route>
                <Route path="/calendar" component={Calendar} />
                <ProtectedRoute path="/adminprofile" component={AdminProfile} />
                <ProtectedRoute path="/userprofile" component={UserProfile} />
                <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
                <Route path="/login" component={LoginForm}></Route>
                <Route path="/register" component={RegisterForm}></Route>
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
