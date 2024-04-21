import React, { useRef } from 'react';
import Webcam from './webcam.js';
import { useFaceDetector } from './facial-rec.js';

const App = () => {
    const videoRef = useRef(null);

    useFaceDetector(videoRef);

    return (
        <div>
            <h1>Webcam Facial Recognition</h1>
            <Webcam videoRef={videoRef} />
        </div>
    );
};

export default App;