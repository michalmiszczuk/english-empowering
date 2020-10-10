import React, {useState} from "react";
import {Route, Redirect, Switch, BrowserRouter} from "react-router-dom";
import NavigationSite from "./Components/NavigationSite";
import AboutMe from "./Components/AboutMe";
import Pricing from "./Components/Pricing";
import Lessons from "./Components/Lessons";
import Blog from "./Components/Blog";
import Calendar from "./Components/Calendar";
import Contact from "./Components/Contact";
import UserProfile from "./Components/UserProfile";
import AdminProfile from "./Components/AdminProfile";
import getUsers from "./services/fakeUserService";
import getLessons from "./services/fakeLessonsService";

import "./App.css";
import TermsAndConditions from "./Components/TermsAndConditions";
import {UserContext} from "./hooks/UserContext";
import {LessonContext} from "./hooks/LessonsContext";

function App() {
  const users = getUsers();
  const [lessons, setLessons] = useState(getLessons());

  const [user, setUser] = useState(users[0]);
  const handleLogOut = () => setUser(users[1]);

  const [isAdmin] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <UserContext.Provider value={{user, setUser}}>
            <LessonContext.Provider value={{lessons, setLessons}}>
              <Route path="/termsconditions" component={TermsAndConditions}></Route>
              <Route path="/aboutme" component={AboutMe}></Route>
              <Route path="/lessons" component={Lessons}></Route>
              <Route path="/pricing" component={Pricing}></Route>
              <Route path="/blog" component={Blog}></Route>
              <Route path="/calendar" render={props => <Calendar admin={isAdmin} />}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/adminProfile" component={AdminProfile}></Route>
              <Route path="/userprofile" component={UserProfile}></Route>
              <Route path="/privacypolicy" component={UserProfile}></Route>
              <Route
                path="/main"
                render={props => <NavigationSite user={user} admin={isAdmin} handleLogOut={handleLogOut} />}
              ></Route>
              <Redirect from="/" to="./main"></Redirect>
            </LessonContext.Provider>
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
