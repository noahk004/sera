// import React, { useRef } from 'react';
// import Webcam from './webcam.js';
// import { useFaceDetector } from './facial-rec.js';

// const App = () => {
//     const videoRef = useRef(null);

//     useFaceDetector(videoRef);

//     return (
//         <div>
//             <h1>Sera</h1>
//             <Webcam videoRef={videoRef} />
//         </div>
//     );
// };

// export default App;

import React, { useRef, useState } from 'react';
import Webcam from './webcam'; // Make sure this is the correct path to your Webcam component
import { useFaceDetector } from './facial-rec';
import './App.css'; // Assuming you are using CSS for styling

const App = () => {
    const videoRef = useRef(null);
    const [tracking, setTracking] = useState(false);
    const [fps, setFps] = useState(1); // Assuming FPS is relevant to your application

    useFaceDetector(videoRef);

    const handleStartTracking = () => {
        // Add any additional logic to start tracking
        setTracking(true);
    };

    return (
        <div className="app-container">
            <div className="app-header">
                <p class='title'>Sera</p>
            </div>
            <main className="main-content">
                <Webcam class='video' videoRef={videoRef} />
                <div className="controls">
                    
                    <button className="tracking-btn" onClick={handleStartTracking}>
                        {tracking ? 'Stop Tracking' : 'Start Tracking'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default App;
