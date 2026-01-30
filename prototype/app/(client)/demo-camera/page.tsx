"use client";

import { useRef, useState, useCallback } from "react";
import { Title, Text, Button, Stack, Paper, Box, Group } from "@mantine/core";
import { CameraCapture } from "@/components/CameraCapture";

export default function DemoCameraPage() {
  return (
    <Stack gap="xl">
      <Title order={1}>Upload document (camera)</Title>
      <Text c="dimmed">
        Prototype: capture a document with your device camera. Image is not sent or stored.
      </Text>
      <CameraCapture />
    </Stack>
  );
}
