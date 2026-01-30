import { Title, Text, Stack } from "@mantine/core";

export default function PaymentProcessingPage() {
  return (
    <Stack gap="xl">
      <Title order={1}>Payment</Title>
      <Text c="dimmed">
        Payment processing (mock). In production this would integrate a payment gateway.
      </Text>
    </Stack>
  );
}
