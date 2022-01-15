import React, {useEffect} from "react";
import {Route, Redirect, Switch, BrowserRouter} from "react-router-dom";

import AdminProfile from "./components/user-adminProfile/AdminProfile";
import Calendar from "./components/calendar/Calendar";
import NavigationSite from "./components/home-navigation/NavigationSite";
import LoginForm from "./components/common/LoginForm";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RegisterForm from "./components/common/RegisterForm";
import UserProfile from "./components/user-adminProfile/UserProfile";
import UserProvider from "./contexts/UserProvider";
import TermsAndConditions from "./components/TermsAndConditions";

import ProtectedRoute from "./components/common/ProtectedRoute";
import ErrorBoundary from "./components/common/ErrorBoundary";
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
