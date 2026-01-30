"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Title, Text } from "@mantine/core";
import { useAuth } from "@/lib/contexts/AuthContext";
import { LoginForm } from "@/components/LoginForm";

export function LoginPageContent() {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/welcome");
    }
  }, [isLoggedIn, router]);

  if (isLoggedIn) {
    return (
      <Box py="xl" ta="center">
        <Text size="sm" c="dimmed">
          Redirecting…
        </Text>
      </Box>
    );
  }

  return (
    <Box py="xl">
      <Title order={1} ta="center" mb="xs">
        Household and property insurance
      </Title>
      <Text ta="center" c="dimmed" mb="xl">
        Client zone – prototype
      </Text>
      <LoginForm />
    </Box>
  );
}
