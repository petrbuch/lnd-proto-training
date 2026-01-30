"use client";

import { Box, Container, Text, Group } from "@mantine/core";

export function AppFooter() {
  return (
    <Box
      component="footer"
      py="lg"
      mt="xl"
      style={{
        borderTop: "1px solid var(--mantine-color-gray-2)",
        backgroundColor: "var(--mantine-color-gray-0)",
      }}
    >
      <Container size="lg">
        <Group justify="space-between" wrap="wrap" gap="md">
          <Text size="sm" c="dimmed">
            Client zone – Household and property insurance (prototype)
          </Text>
          <Text size="sm" c="dimmed">
            © {new Date().getFullYear()} Lundegaard
          </Text>
        </Group>
      </Container>
    </Box>
  );
}
