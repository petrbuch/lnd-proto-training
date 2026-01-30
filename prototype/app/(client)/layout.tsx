"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Container } from "@mantine/core";
import { useAuth } from "@/lib/contexts/AuthContext";
import { ClientNav } from "@/components/ClientNav";
import { AppFooter } from "@/components/AppFooter";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return (
      <Box py="xl" ta="center">
        <Container size="sm">Redirecting to sign in…</Container>
      </Box>
    );
  }

  return (
    <>
      <ClientNav />
      <Box component="main" py="md">
        <Container size="lg">{children}</Container>
      </Box>
      <AppFooter />
    </>
  );
}
