"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, TextInput, Paper, Title, Text, Stack, Box } from "@mantine/core";
import { useAuth } from "@/lib/contexts/AuthContext";

const schema = z.object({
  email: z.string().min(1, "Enter email").email("Invalid email"),
  password: z.string().min(1, "Enter password"),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: FormValues) => {
    setError(null);
    login(data.email, data.password);
    router.push("/welcome");
    router.refresh();
  };

  return (
    <Box maw={400} mx="auto" py="xl">
      <Paper p="xl" shadow="sm" radius="md" withBorder>
        <Title order={2} mb="xs">
          Sign in to client zone
        </Title>
        <Text size="sm" c="dimmed" mb="lg">
          Household and property insurance. Prototype – sign in with any credentials.
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap="md">
            <TextInput
              label="Email"
              placeholder="you@example.com"
              type="email"
              error={errors.email?.message}
              {...register("email")}
              autoComplete="email"
            />
            <TextInput
              label="Password"
              placeholder="••••••••"
              type="password"
              error={errors.password?.message}
              {...register("password")}
              autoComplete="current-password"
            />
            {error && (
              <Text size="sm" c="red">
                {error}
              </Text>
            )}
            <Button type="submit" fullWidth>
              Sign in
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
