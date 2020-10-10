import React, { useContext, useEffect, useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import ProgressBar from './ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { LessonContext } from "../hooks/LessonsContext"
import { UserContext } from "../hooks/UserContext"
import "./CSS/AdminProfile.css"
import getUsers from '../services/fakeUserService';
import Button from './Button';
import AddLesson from './common/AddLesson';
import sortDates from '../utils/sortDates'

function AdminProfile(props) {

    const allUsers = getUsers()

    const [users] = useState(allUsers)
    const { user, setUser } = useContext(UserContext)
    const [showUsersList, setShowUsersList] = useState(false);
    const [showAllLessons, setShowAlllessons] = useState(false);
    const [showAddPage, setShowAddPage] = useState(false);
    const [inputHour, setInputHour] = useState("")
    const [dayMonth, setDayMonth] = useState("")


    const { lessons, setLessons } = useContext(LessonContext)
    const userProgress = user.progress

    useEffect(() => console.log("lalala"), [])


    const handleChangeUser = (user) => {
        setUser(user)
        setShowUsersList(false)
    }

    const findAllLessonsToRender = () => {
        const allReseverdLessons = lessons.filter(lesson => lesson.isReserved === true)
        return allReseverdLessons
    }

    const allLessonsToRender = findAllLessonsToRender()

    const lessonsToRender = () => {
        const userReservedLessons = user.reservedLessons
        let lesRender = []
        for (let lesson of lessons) {
            for (let les of userReservedLessons) {
                if (lesson._id === les._id) lesRender.push(lesson)
            }
        }
        return lesRender
    }

    const lessonsNoSort = lessonsToRender()
    const allresLessons = sortDates(lessonsNoSort)

    const handleSetLevel = (title, level) => {
        const newProgress = [...user.progress]
        const currentBar = newProgress.find(bar => bar.title === title)
        if (currentBar.currentLevel === level) level = 0;
        currentBar.currentLevel = level
        setUser({ ...user, progress: newProgress })
    }

    const handleCancelLesson = item => {
        setUser(prevUser => {
            const newReserved = [...prevUser.reservedLessons];
            const removedReserved = newReserved.filter(lesson => lesson._id !== item._id);
            return { ...prevUser, reservedLessons: removedReserved }
        });
        const lessonsWithoutReserved = lessons.filter(l => l._id !== item._id)
        const lessonToAdd = { ...item, isReserved: false }
        lessonsWithoutReserved.push(lessonToAdd)
        setLessons(lessonsWithoutReserved)
    };

    const setWhichLessons = () => {
        if (showAllLessons) return allLessonsToRender;
        return allresLessons;
    }


    const LesToRenNoSort = setWhichLessons()
    const LesToRen = sortDates(LesToRenNoSort)

    const submitAddLesson = (e) => {
        e.preventDefault();
        const newId = Math.floor(Math.random() * 1000).toString()
        const newLessonToAdd = { days: dayMonth.dMonth, time: inputHour, isReserved: true, isDisabled: false, _id: newId }
        setLessons([...lessons, newLessonToAdd])
        setUser(prevUser => {
            const newReservedLessons = [...prevUser.reservedLessons]
            const newIdtoUser = { _id: newId }
            newReservedLessons.push(newIdtoUser)
            return { ...prevUser, reservedLessons: newReservedLessons }
        })
        setShowAddPage(false);
    }

    const handleUserListClick = () => {
        showUsersList ? setShowUsersList(false) : setShowUsersList(true)
    }

    console.log(lessons, user)

    return (

        <div className="userProfileMainDiv">
            <NavBar name="Admin" />

            <div className="mainContentUsers">

                <div key={user._id} className="usersInfoMainLeft">
                    <div id="userSelectorTitle">Wybierz ucznia</div>
                    <div className={showUsersList ? "userSelectorFull" : "userSelector"} onClick={handleUserListClick}>
                        {showUsersList ? null : <div>{user.name} {user.surname}</div>}
                        <div className={showUsersList ? "usersListExpanded" : "usersList"}>
                            {users.map(user => <div key={user._id} onClick={() => handleChangeUser(user)} className="oneUserSelect">{user.name} {user.surname}</div>)}
                        </div>
                    </div>
                    <div className="personalInfo">
                        Imię: {user.name} <br />
                        Nazwisko: {user.surname} <br />
                        E-mail: {user.email} <br />
                    </div>
                    <div className="progressHeader">
                        Mój postęp:
                    </div >
                    <div className="progressTables">
                        {userProgress.map(bar =>
                            <ProgressBar
                                key={bar.title}
                                title={bar.title}
                                setLevel={(level) => handleSetLevel(bar.title, level)}
                                currentLevel={bar.currentLevel} />)}
                    </div>
                </div>
                <div className="resLessonsContainer">
                    <div className="adminResHeader" style={{ cursor: "pointer", color: showAllLessons ? "oldlace" : "skyblue" }} onClick={() => setShowAlllessons(false)}>Zajęcia z danym uczeniem</div>
                    <div className="adminResHeader2" style={{ cursor: "pointer", color: showAllLessons ? "skyblue" : "oldlace" }} onClick={() => setShowAlllessons(true)}>Wszystkie zajęcia</div>
                    {!showAddPage && <div className="resLessons">
                        {LesToRen.map(item =>
                            <div key={item._id} className="eachLessonContainer">
                                <div className="eachLesson">{item.days} {item.time}
                                    {users.map(user => user.reservedLessons.map(lesson => lesson._id === item._id && showAllLessons ? <div>{user.name} {user.surname}</div> : null))}
                                </div>

                                <div className="deleteReserved" onClick={item.isDisabled ? null : () => handleCancelLesson(item)}
                                    style={{ backgroundColor: "crimson", cursor: "pointer" }}>
                                    <FontAwesomeIcon
                                        icon={faTimes}
                                        style={styles.closeIcon}
                                    />
                                </div>
                            </div>

                        )}
                    </div>}
                    {showAddPage && <div id="addPage">
                        <AddLesson
                            iconClick={() => setShowAddPage(false)}
                            onSubmit={submitAddLesson}
                            onChange={(event) => setInputHour(event.target.value)}
                            dateChosen={(value) => setDayMonth(value)}
                            dayMonth={dayMonth}
                        />
                    </div>}
                    {!showAllLessons && <div id="addPageButton">
                        {!showAddPage && <Button
                            width={180}
                            height={70}
                            backgroundColor="coral"
                            text="Add"
                            fontSize={15}
                            onClick={() => setShowAddPage(true)}
                            borderradius={50}
                            border="none"
                            marginTop={20}></Button>}
                    </div>}
                </div>
            </div>
            <Footer />
        </div >

    );
}

export default AdminProfile;

const styles = {
    closeIcon: {
        width: 15,
        height: 15,
        color: "white",
    }
}
