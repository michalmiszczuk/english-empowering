import React from 'react';

import "./UserProgress.css"

function progressBar({ title, setLevel, currentLevel, noPointer }) {
    return (
        <div className="progress-bar-div">
            {title}
            <table className={noPointer ? "progress-bar-table no-pointer" : "progress-bar-table"}>
                <thead>
                    <tr>
                        <td className="progress-icons" onClick={() => setLevel(1)} style={{ backgroundColor: currentLevel >= 1 ? "#f0b17c" : "#eee", }}>1</td>
                        <td className="progress-icons" onClick={() => setLevel(2)} style={{ backgroundColor: currentLevel >= 2 ? "#ec9f5f" : "#eee", }}>2</td>
                        <td className="progress-icons" onClick={() => setLevel(3)} style={{ backgroundColor: currentLevel >= 3 ? "#e78332" : "#eee", }}>3</td>
                        <td className="progress-icons" onClick={() => setLevel(4)} style={{ backgroundColor: currentLevel >= 4 ? "#cd6a18" : "#eee", }}>4</td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default progressBar;