//facial-rec.js
import { useEffect, useState, useRef } from 'react';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import '@tensorflow/tfjs-backend-webgl';

export const useFaceDetector = (videoRef) => {
    const [detector, setDetector] = useState(null);
    const detectionInterval = useRef(null);

    useEffect(() => {
        const loadModel = async () => {
            const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
            const detectorConfig = {
                runtime: 'tfjs', // or 'tfjs'
                solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
            };
            const detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
            setDetector(detector);
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