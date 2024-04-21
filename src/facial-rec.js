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
                    //console.log(faces[0].filter(items => Object.keys('keypoints').hasOwnProperty('name')));
                    
                    try{
                        const faceNames = faces[0]['keypoints'].filter(items => items.hasOwnProperty('name'));
                        //console.log(faces[0]['keypoints'].filter(items => items.hasOwnProperty('name')));
                        const rightEye = faceNames.filter(items => items["name"] == "rightEye")[2].x;
                        const leftEye = faceNames.filter(items => items["name"] == "leftEye")[2].x;
                        const faceOvalRight = faceNames.filter(items => items["name"] == "faceOval")[26].x;
                        const faceOvalLeft = faceNames.filter(items => items["name"] == "faceOval")[15].x;
                        if (rightEye + 50 > faceOvalRight || leftEye - 50 < faceOvalLeft) {
                            console.log(false);
                        } else {
                            console.log(true);
                        }
                    } catch (error){
                        console.log(false);
                    }
                    // if (rightEye + 50 > faceOvalRight || leftEye - 50 < faceOvalLeft) {
                    //     console.log(false);
                    // } else {
                    //     console.log(true);
                    // }
                    
                    //console.log(rightEye);
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