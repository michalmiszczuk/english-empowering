import React from 'react';
import "./ProgressBar.css"

function progressBar({ title, setLevel, currentLevel, noPointer }) {
    return (
        <div className="progress-bar-div">
            {title}
            <table className={noPointer ? "progress-bar-table no-pointer" : "progress-bar-table"}>
                <thead>
                    <tr>
                        <th onClick={() => setLevel(1)} style={{ backgroundColor: currentLevel >= 1 ? "skyblue" : "black", }}>1</th>
                        <th onClick={() => setLevel(2)} style={{ backgroundColor: currentLevel >= 2 ? "skyblue" : "black", }}>2</th>
                        <th onClick={() => setLevel(3)} style={{ backgroundColor: currentLevel >= 3 ? "skyblue" : "black", }}>3</th>
                        <th onClick={() => setLevel(4)} style={{ backgroundColor: currentLevel >= 4 ? "skyblue" : "black", }}>4</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default progressBar;