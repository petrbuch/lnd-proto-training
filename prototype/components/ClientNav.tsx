"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, Group, Box, Container } from "@mantine/core";
import { useAuth } from "@/lib/contexts/AuthContext";

const links = [
  { href: "/welcome", label: "Welcome" },
  { href: "/onboarding", label: "Get insurance" },
  { href: "/dashboard", label: "Overview" },
  { href: "/demo-camera", label: "Camera" },
];

export function ClientNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
    router.refresh();
  };

  return (
    <Box component="header" py="sm" style={{ borderBottom: "1px solid var(--mantine-color-gray-2)" }}>
      <Container size="lg">
        <Group justify="space-between" wrap="wrap" gap="md">
          <Group gap="lg">
            <Link href="/welcome" style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}>
              Client zone
            </Link>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  textDecoration: "none",
                  color: pathname === href ? "var(--mantine-color-brand-6)" : "var(--mantine-color-gray-7)",
                  fontWeight: pathname === href ? 600 : 400,
                }}
              >
                {label}
              </Link>
            ))}
          </Group>
          <Button variant="subtle" color="gray" size="sm" onClick={handleLogout}>
            Sign out
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
