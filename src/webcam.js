//webcam.js
import React, { useEffect, useRef } from 'react';

const Webcam = ({ videoRef }) => {
    useEffect(() => {
        const getVideo = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing the webcam:', error);
            }
        };

        getVideo();
    }, [videoRef]);

    return <video ref={videoRef} autoPlay muted playsInline width="720" height="480" />;
};

export default Webcam;