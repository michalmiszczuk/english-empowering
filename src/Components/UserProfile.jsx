import React, { useContext } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import ProgressBar from './ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../hooks/UserContext"
import { LessonContext } from "../hooks/LessonsContext"
import "./CSS/UserProfile.css"
import checkDate from '../utils/checkDate';

function UserProfile(props) {

    const { user, setUser } = useContext(UserContext)
    const { lessons, setLessons } = useContext(LessonContext)
    const userProgress = user.progress


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

    const allresLessons = lessonsToRender()


    const handleSetLevel = (title, level) => {
        const newProgress = [...user.progress]
        const currentBar = newProgress.find(bar => bar.title === title)
        if (currentBar.currentLevel === level) level = 0;
        currentBar.currentLevel = level
        setUser({ ...user, progress: newProgress })
    }


    // const handleSetLevel = (title, level) => {
    //     setUser(prevUser => {
    //         const newProgress = [...prevUser.progress];
    //         const barToCheck = newProgress.find(bar => bar.title === title)
    //         barToCheck.currentLevel = level
    //         console.log(newProgress)
    //         return { ...prevUser, progress: newProgress };
    //     });
    // };


    // const handleSetLevel = (title, level) => {
    //     setUser(prevUser => {
    //         const newProgress = [...prevUser.progress];
    //         let index = newProgress.findIndex(bar => bar.title === title)
    //         let barToCheck = newProgress.filter(bar => bar.title === title)
    //         let updateProgress = newProgress.filter(bar => bar.title !== title)
    //         if (barToCheck[0].currentLevel === level) level = 0;
    //         let barToAdd = { title, currentLevel: level }
    //         updateProgress.splice(index, 0, barToAdd)
    //         console.log(barToCheck)
    //         return { ...prevUser, progress: updateProgress };
    //     });
    // };

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


    const allLessons = checkDate(allresLessons)


    return (

        <div className="userProfileMainDiv">
            <NavBar name="Moje konto" />
            <div className="mainContentUsers">
                <div key={user._id} className="usersInfoMainLeft">
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
                    <div className="resHeader">Zarezerwowane zajęcia</div>
                    <div className="resLessons">
                        {allLessons.map(item =>
                            <div key={item._id} className="eachLessonContainer">
                                <div className="eachLesson">{item.days} {item.time}</div>
                                <div className="deleteReserved" onClick={item.isDisabled ? null : () => handleCancelLesson(item)}
                                    style={{
                                        backgroundColor: item.isDisabled ? "lightsalmon" : "crimson",
                                        cursor: item.isDisabled ? null : "pointer"
                                    }}>
                                    <FontAwesomeIcon
                                        key={item._id}
                                        icon={faTimes}
                                        style={styles.closeIcon}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div id="cancelInformation">
                        <div id="iconInformation">
                            <FontAwesomeIcon
                                icon={faTimes}
                                style={styles.closeIcon}
                            />
                        </div>
                       - Anuluj zajęcia. Pamiętaj ! Można odwołać rezerwację do 24h przed rozpoczęciem zajęć. </div>
                </div>
            </div>
            <Footer />
        </div >

    );
}

export default UserProfile;

const styles = {
    closeIcon: {
        width: 15,
        height: 15,
        color: "white",
    }
}

//  const handleSetLevel = (itemIndex, level) => {
//         setUser(prevUser => {
//             const newProgress = [...prevUser.progress];
//             newProgress[itemIndex].currentLevel = level;
//             return { ...prevUser, progress: newProgress };
//         });
//     };