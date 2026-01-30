import { createTheme, MantineColorsTuple } from "@mantine/core";

// JerryPoj / Lundegaard inspired: teal-blue primary, clean and friendly
const brand: MantineColorsTuple = [
  "#e6f7f7",
  "#ccefef",
  "#99dfde",
  "#66cfce",
  "#33bfbd",
  "#00afad", // primary
  "#008c8a",
  "#006968",
  "#004645",
  "#002323",
];

export const theme = createTheme({
  primaryColor: "brand",
  colors: {
    brand,
  },
  fontFamily: "var(--font-sans), system-ui, -apple-system, sans-serif",
  headings: {
    fontFamily: "var(--font-sans), system-ui, -apple-system, sans-serif",
  },
});
