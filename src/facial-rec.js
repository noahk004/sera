//facial-rec.js
import { useEffect, useState, useRef } from 'react';
import * as faceDetection from '@tensorflow-models/face-detection';
import '@tensorflow/tfjs-backend-webgl';

export const useFaceDetector = (videoRef) => {
    const [detector, setDetector] = useState(null);
    const detectionInterval = useRef(null);

    useEffect(() => {
        const loadModel = async () => {
            const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
            const detectorConfig = {
                runtime: 'mediapipe',
                solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_detection'
            };
            const loadedDetector = await faceDetection.createDetector(model, detectorConfig);
            setDetector(loadedDetector);
        };

        loadModel();
    }, []);

    useEffect(() => {
        if (detector && videoRef.current) {
            detectionInterval.current = setInterval(async () => {
                if (videoRef.current && !videoRef.current.paused && !videoRef.current.ended) {
                    const faces = await detector.estimateFaces(videoRef.current, { flipHorizontal: false });
                    console.log(faces);
                    // Additional logic to handle the detected faces
                }
            }, 1000); // Run detection every 1000 milliseconds (1 second)
        }

        return () => {
            if (detectionInterval.current) {
                clearInterval(detectionInterval.current);
            }
        };
    }, [detector, videoRef]);

    return null;
};