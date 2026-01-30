import { z } from "zod";

// Step 1: Property details
export const step1Schema = z.object({
  address: z.string().min(1, "Enter property address"),
  city: z.string().min(1, "Enter city"),
  zip: z.string().regex(/^\d{3}\s?\d{2}$/, "Enter valid ZIP (e.g. 110 00)"),
  propertyType: z.enum(["dum", "byt", "chalupa", "jine"], {
    errorMap: () => ({ message: "Select property type" }),
  }),
  area: z.coerce.number().min(1, "Enter area in m²").max(5000, "Invalid area"),
});

// Step 2: Household / sums insured and contact
export const step2Schema = z.object({
  householdValue: z.coerce.number().min(100000, "Min. 100,000").max(50000000, "Max. 50,000,000"),
  buildingValue: z.coerce.number().min(100000, "Min. 100,000").max(50000000, "Max. 50,000,000"),
  email: z.string().min(1, "Enter email").email("Invalid email"),
  phone: z.string().min(9, "Enter valid phone number"),
});

// Full form (for summary)
export const onboardingSchema = step1Schema.merge(step2Schema);
export type OnboardingFormValues = z.infer<typeof onboardingSchema>;
export type Step1Values = z.infer<typeof step1Schema>;
export type Step2Values = z.infer<typeof step2Schema>;
