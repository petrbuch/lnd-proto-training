import Link from "next/link";
import { Title, Text, Card, Group, Button, Stack } from "@mantine/core";

export default function WelcomePage() {
  return (
    <Stack gap="xl">
      <Title order={1}>Welcome to the client zone</Title>
      <Text c="dimmed">
        Household and property insurance. Get insurance online or view your contracts.
      </Text>
      <Group gap="md" wrap="wrap">
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{ minWidth: 260 }}>
          <Title order={3} mb="xs">
            Get insurance
          </Title>
          <Text size="sm" c="dimmed" mb="md">
            Fill in the form to get a household and property insurance quote.
          </Text>
          <Button component={Link} href="/onboarding" variant="filled">
            Start
          </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{ minWidth: 260 }}>
          <Title order={3} mb="xs">
            Contract overview
          </Title>
          <Text size="sm" c="dimmed" mb="md">
            View your contracts and documents.
          </Text>
          <Button component={Link} href="/dashboard" variant="light">
            Open overview
          </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{ minWidth: 260 }}>
          <Title order={3} mb="xs">
            Upload document (camera)
          </Title>
          <Text size="sm" c="dimmed" mb="md">
            Capture a document with your device camera.
          </Text>
          <Button component={Link} href="/demo-camera" variant="light">
            Open camera
          </Button>
        </Card>
      </Group>
    </Stack>
  );
}
