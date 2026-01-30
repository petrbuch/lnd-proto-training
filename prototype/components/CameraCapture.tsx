"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Button, Stack, Paper, Text, Group, Box } from "@mantine/core";

export function CameraCapture() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [streaming, setStreaming] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startCamera = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setStreaming(true);
    } catch (e) {
      setError("Camera not available or permission denied.");
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setStreaming(false);
  }, []);

  const capture = useCallback(() => {
    if (!videoRef.current || !streaming) return;
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
    setCapturedImage(dataUrl);
    stopCamera();
  }, [streaming, stopCamera]);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  return (
    <Stack gap="md">
      {error && (
        <Paper p="md" withBorder bg="red.0">
          <Text size="sm" c="red">
            {error}
          </Text>
        </Paper>
      )}

      {!streaming && !capturedImage && (
        <Paper p="lg" withBorder>
          <Text size="sm" c="dimmed" mb="md">
            Start the camera and capture a document (e.g. ID, contract). Prototype – image is not stored.
          </Text>
          <Button onClick={startCamera}>Start camera</Button>
        </Paper>
      )}

      {streaming && (
        <Paper p="md" withBorder>
          <Box style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{ width: "100%", borderRadius: 8 }}
            />
            <Group mt="md" justify="center">
              <Button onClick={capture}>Capture</Button>
              <Button variant="default" onClick={stopCamera}>
                Cancel
              </Button>
            </Group>
          </Box>
        </Paper>
      )}

      {capturedImage && (
        <Paper p="md" withBorder>
          <Text size="sm" fw={500} mb="sm">
            Image preview (prototype – not sent)
          </Text>
          <Box
            component="img"
            src={capturedImage}
            alt="Preview"
            style={{ maxWidth: "100%", borderRadius: 8, display: "block" }
            }
          />
          <Button variant="light" mt="md" onClick={() => { setCapturedImage(null); startCamera(); }}>
            Capture again
          </Button>
        </Paper>
      )}
    </Stack>
  );
}
