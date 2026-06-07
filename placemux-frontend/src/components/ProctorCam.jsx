import { useEffect, useState, useRef } from "react";
import * as blazeface from "@tensorflow-models/blazeface";
import "@tensorflow/tfjs";

export default function ProctorCam() {
  const videoRef = useRef(null);

  const [status, setStatus] = useState("Starting Camera...");
  const [statusColor, setStatusColor] = useState("orange");

  useEffect(() => {
    let model;

    async function start() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      videoRef.current.srcObject = stream;

      model = await blazeface.load();

      setInterval(async () => {
        if (!videoRef.current) return;

        const predictions = await model.estimateFaces(
          videoRef.current,
          false
        );

        if (predictions.length === 0) {
          setStatus("No Face Detected");
          setStatusColor("red");
        } else if (predictions.length > 1) {
          setStatus("Multiple Faces Detected");
          setStatusColor("orange");
        } else {
          setStatus("Face Detected");
          setStatusColor("green");
        }
      }, 3000);
    }

    start();
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "20px",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          width: "300px",
          borderRadius: "12px",
          border: "3px solid #ddd",
        }}
      />

      <div
        style={{
          marginTop: "10px",
          padding: "10px",
          borderRadius: "8px",
          background: statusColor,
          color: "white",
          fontWeight: "bold",
          width: "220px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {status}
      </div>
    </div>
  );
}