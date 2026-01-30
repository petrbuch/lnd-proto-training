"use client";

import { Paper, Title, Text, Stack, Box } from "@mantine/core";

/**
 * Placeholder view of contract (smlouva) in client zone.
 * Prototype: no real IPID/terms; for production add full pre-contract info.
 */
export function ContractView() {
  return (
    <Paper p="lg" radius="md" withBorder bg="gray.0">
      <Stack gap="md">
        <Title order={4}>Contract preview – Household and property insurance</Title>
        <Text size="sm" c="dimmed">
          This is placeholder contract text. In production this would show full terms,
          product information (IPID) and withdrawal rights.
        </Text>
        <Box style={{ border: "1px dashed var(--mantine-color-gray-4)", borderRadius: 8, padding: 16 }}>
          <Text size="xs" c="dimmed">
            Policyholder: [form data]
            <br />
            Premium: indicative based on sums entered
            <br />
            Valid from: date of conclusion
          </Text>
        </Box>
        <Text size="xs" c="dimmed">
          Client zone – contract preview. Confirm below to complete (demo).
        </Text>
      </Stack>
    </Paper>
  );
}
