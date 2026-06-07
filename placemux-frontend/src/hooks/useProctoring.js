import { useEffect, useRef, useState } from "react";
import * as blazeface from "@tensorflow-models/blazeface";
import "@tensorflow/tfjs";

export default function useProctoring() {
  const videoRef = useRef(null);
  const modelRef = useRef(null);
  const streamRef = useRef(null);

  const [status, setStatus] = useState("initializing");
  const [events, setEvents] = useState([]);

  const logEvent = (type) => {
    const event = { type, time: new Date().toISOString() };

    setEvents((prev) => {
      const updated = [...prev, event];
      localStorage.setItem("proctor_logs", JSON.stringify(updated));
      return updated;
    });

    console.warn("PROCTOR EVENT:", event);
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setStatus("camera_started");
    } catch (err) {
      console.error(err);
      setStatus("camera_error");
    }
  };

  const loadModel = async () => {
    modelRef.current = await blazeface.load();
    setStatus("model_loaded");
  };

  const detectFaces = async () => {
    if (!videoRef.current || !modelRef.current) return;

    const predictions = await modelRef.current.estimateFaces(
      videoRef.current,
      false
    );

    if (predictions.length === 0) {
      logEvent("NO_FACE_DETECTED");
    } else if (predictions.length > 1) {
      logEvent("MULTIPLE_FACES_DETECTED");
    } else {
      logEvent("FACE_OK");
    }
  };

  useEffect(() => {
    let interval;

    const init = async () => {
      await startCamera();
      await loadModel();

      interval = setInterval(() => {
        detectFaces();
      }, 3000);
    };

    init();

    // cleanup
    return () => {
      clearInterval(interval);

      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  return {
    videoRef,
    status,
    events,
  };
}