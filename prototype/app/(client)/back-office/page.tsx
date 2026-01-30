import { Title, Text, Stack } from "@mantine/core";

export default function BackOfficePage() {
  return (
    <Stack gap="xl">
      <Title order={1}>Back office</Title>
      <Text c="dimmed">
        Internal overview (mock). For administrators.
      </Text>
    </Stack>
  );
}
