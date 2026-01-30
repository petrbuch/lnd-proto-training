import Link from "next/link";
import { Title, Text, Card, Button, Stack } from "@mantine/core";

export default function DashboardPage() {
  return (
    <Stack gap="xl">
      <Title order={1}>Contract overview</Title>
      <Text c="dimmed">
        View your contracts and documents here. Prototype – no data yet.
      </Text>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Text size="sm" c="dimmed" mb="md">
          No contracts. Get insurance via the wizard.
        </Text>
        <Button component={Link} href="/onboarding" variant="light">
          Get insurance
        </Button>
      </Card>
    </Stack>
  );
}
