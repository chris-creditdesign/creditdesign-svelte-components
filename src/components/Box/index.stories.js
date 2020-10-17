import Box from "./view.default.svelte";

export default {
  title: "Box",
};

export const Default = () => ({
  Component: Box,
  props: { boxSpace: "var(--s-1)" /* default */ },
});

export const ExtraSpace = () => ({
  Component: Box,
  props: { boxSpace: "var(--s3)" },
});

export const NoSpace = () => ({
  Component: Box,
  props: { boxSpace: "0" },
});
