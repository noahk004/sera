//facial-rec.js
import { useEffect, useState, useRef } from 'react';
import * as faceLandmarksDetection from '@tensorflow-models/face-landmarks-detection';
import '@tensorflow/tfjs-backend-webgl';

export const useFaceDetector = (videoRef) => {
    const [detector, setDetector] = useState(null);
    const detectionInterval = useRef(null);
    const audioRef = useRef(new Audio('/ringtone-126505.mp3'));
    const [shouldPlayAudio, setShouldPlayAudio] = useState(false);

    useEffect(() => {
        const loadModel = async () => {
            const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
            const detectorConfig = {
                runtime: 'tfjs',
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

                    try {
                        const faceNames = faces[0]['keypoints'].filter(items => items.hasOwnProperty('name'));
                        const rightEye = faceNames.filter(items => items["name"] == "rightEye")[2]?.x;
                        const leftEye = faceNames.filter(items => items["name"] == "leftEye")[2]?.x;
                        const faceOvalRight = faceNames.filter(items => items["name"] == "faceOval")[26]?.x;
                        const faceOvalLeft = faceNames.filter(items => items["name"] == "faceOval")[15]?.x;

                        if ((rightEye + 50 > faceOvalRight) || (leftEye - 50 < faceOvalLeft)) {
                            if (!shouldPlayAudio) {
                                setShouldPlayAudio(true);
                                audioRef.current.play();
                                console.log("Condition met, playing sound.");
                            }
                        } else {
                            if (shouldPlayAudio) {
                                setShouldPlayAudio(false);
                                audioRef.current.pause();
                                audioRef.current.currentTime = 0;
                                console.log("Condition not met, stopping sound.");
                            }
                        }
                    } catch (error) {
                        console.error("Error processing facial landmarks:", error);
                        if (shouldPlayAudio) {
                            setShouldPlayAudio(false);
                            audioRef.current.pause();
                            audioRef.current.currentTime = 0;
                        }
                    }
                }
            }, 3000); // This is the detection frequency, set to 1 second (1000 ms)
        }

        return () => {
            if (detectionInterval.current) {
                clearInterval(detectionInterval.current);
            }
            if (shouldPlayAudio) {
                audioRef.current.pause();
            }
        };
    }, [detector, videoRef, shouldPlayAudio]);

    return null;
};