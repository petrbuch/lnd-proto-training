"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Stepper,
  Button,
  Group,
  TextInput,
  Select,
  NumberInput,
  Stack,
  Title,
  Text,
  Paper,
  Box,
} from "@mantine/core";
import {
  step1Schema,
  step2Schema,
  type OnboardingFormValues,
  type Step1Values,
  type Step2Values,
} from "@/lib/types/onboarding";
import { ContractView } from "./ContractView";

const PROPERTY_TYPES = [
  { value: "dum", label: "House" },
  { value: "byt", label: "Flat" },
  { value: "chalupa", label: "Cottage" },
  { value: "jine", label: "Other" },
];

export function OnboardingForm() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [completed, setCompleted] = useState(false);

  const form = useForm<OnboardingFormValues>({
    mode: "onChange",
    defaultValues: {
      address: "",
      city: "",
      zip: "",
      propertyType: undefined,
      area: undefined,
      householdValue: 500000,
      buildingValue: 2000000,
      email: "",
      phone: "",
    },
    resolver:
      active === 0
        ? zodResolver(step1Schema)
        : active === 1
          ? zodResolver(step2Schema)
          : undefined,
  });

  const nextStep = async () => {
    if (active === 0) {
      const ok = await form.trigger(["address", "city", "zip", "propertyType", "area"]);
      if (!ok) return;
    }
    if (active === 1) {
      const ok = await form.trigger(["householdValue", "buildingValue", "email", "phone"]);
      if (!ok) return;
    }
    setActive((a) => Math.min(a + 1, 4));
  };

  const prevStep = () => setActive((a) => Math.max(a - 1, 0));

  const handleFinish = () => {
    setCompleted(true);
    // Prototype: no real submit; could redirect to dashboard or thank-you
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <Box>
      <Title order={1} mb="xs">
        Household and property insurance
      </Title>
      <Text c="dimmed" mb="xl">
        Fill in the details step by step. Prototype – data is not stored.
      </Text>

      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false} mb="xl">
        <Stepper.Step label="Property" description="Address and type">
          <Paper p="lg" radius="md" withBorder mt="md">
            <Stack gap="md">
              <TextInput
                label="Property address"
                placeholder="Street, number, city"
                {...form.register("address")}
                error={form.formState.errors.address?.message}
              />
              <Group grow>
                <TextInput
                  label="City"
                  placeholder="City"
                  {...form.register("city")}
                  error={form.formState.errors.city?.message}
                />
                <TextInput
                  label="ZIP"
                  placeholder="110 00"
                  {...form.register("zip")}
                  error={form.formState.errors.zip?.message}
                />
              </Group>
              <Select
                label="Property type"
                placeholder="Select"
                data={PROPERTY_TYPES}
                error={form.formState.errors.propertyType?.message}
                value={form.watch("propertyType")}
                onChange={(v) => form.setValue("propertyType", v as Step1Values["propertyType"])}
              />
              <NumberInput
                label="Floor area (m²)"
                placeholder="120"
                min={1 as number}
                max={5000 as number}
                value={form.watch("area")}
                onChange={(v) => form.setValue("area", typeof v === "number" ? v : Number(v) || 0)}
                error={form.formState.errors.area?.message}
              />
            </Stack>
          </Paper>
        </Stepper.Step>

        <Stepper.Step label="Household and contact" description="Sums insured">
          <Paper p="lg" radius="md" withBorder mt="md">
            <Stack gap="md">
              <NumberInput
                label="Sum insured – household"
                placeholder="500 000"
                min={100000 as number}
                max={50000000 as number}
                thousandSeparator=" "
                value={form.watch("householdValue")}
                onChange={(v) => form.setValue("householdValue", typeof v === "number" ? v : Number(v) || 0)}
                error={form.formState.errors.householdValue?.message}
              />
              <NumberInput
                label="Sum insured – property"
                placeholder="2 000 000"
                min={100000 as number}
                max={50000000 as number}
                thousandSeparator=" "
                value={form.watch("buildingValue")}
                onChange={(v) => form.setValue("buildingValue", typeof v === "number" ? v : Number(v) || 0)}
                error={form.formState.errors.buildingValue?.message}
              />
              <TextInput
                label="Email"
                type="email"
                placeholder="you@example.com"
                {...form.register("email")}
                error={form.formState.errors.email?.message}
              />
              <TextInput
                label="Phone"
                placeholder="+1 234 567 890"
                {...form.register("phone")}
                error={form.formState.errors.phone?.message}
              />
            </Stack>
          </Paper>
        </Stepper.Step>

        <Stepper.Step label="Attachments" description="Documents (demo)">
          <Paper p="lg" radius="md" withBorder mt="md">
            <Text c="dimmed" size="sm">
              In production this step would allow document upload or camera capture. Prototype – you can continue.
            </Text>
            <Button component="a" href="/demo-camera" variant="light" mt="md">
              Open camera demo
            </Button>
          </Paper>
        </Stepper.Step>

        <Stepper.Step label="Summary" description="Check details">
          <Paper p="lg" radius="md" withBorder mt="md">
            <Stack gap="xs">
              <Text fw={600}>Property</Text>
              <Text size="sm">{form.watch("address")}, {form.watch("zip")} {form.watch("city")}</Text>
              <Text size="sm">Type: {PROPERTY_TYPES.find((p) => p.value === form.watch("propertyType"))?.label}, area {form.watch("area")} m²</Text>
              <Text fw={600} mt="md">Sums insured</Text>
              <Text size="sm">Household: {form.watch("householdValue")?.toLocaleString("en")}</Text>
              <Text size="sm">Property: {form.watch("buildingValue")?.toLocaleString("en")}</Text>
              <Text fw={600} mt="md">Contact</Text>
              <Text size="sm">{form.watch("email")}, {form.watch("phone")}</Text>
            </Stack>
          </Paper>
        </Stepper.Step>

        <Stepper.Completed>
          <Paper p="lg" radius="md" withBorder mt="md">
            <Title order={3} mb="md">
              Contract (preview)
            </Title>
            <ContractView />
            <Button onClick={handleFinish} fullWidth mt="lg">
              Confirm insurance (demo)
            </Button>
          </Paper>
        </Stepper.Completed>
      </Stepper>

      {active < 4 && (
        <Group justify="space-between" mt="xl">
          <Button variant="default" onClick={prevStep} disabled={active === 0}>
            Back
          </Button>
          <Button onClick={nextStep}>
            {active === 3 ? "View contract" : "Next"}
          </Button>
        </Group>
      )}
    </Box>
  );
}
