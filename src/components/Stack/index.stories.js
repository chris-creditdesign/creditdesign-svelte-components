import Stack from "./view.default.svelte";
import ViewSplitBefore from "./view.split-before.svelte";
import ViewText from "./view.text.svelte";
import ViewNested from "./view.nested.svelte";

export default {
  title: "Stack",
};

export const Default = () => ({
  Component: Stack,
  props: { stackSpace: "var(--s-1)" /* default */ },
});

export const ExtraSpace = () => ({
  Component: Stack,
  props: { stackSpace: "var(--s3)" },
});

export const SplitBefore = () => ({
  Component: ViewSplitBefore,
  props: { stackSpace: "var(--s-1)" /* default */ },
});

export const Text = () => ({
  Component: ViewText,
  props: { stackSpace: "var(--s-1)" /* default */ },
});

export const Nested = () => ({
  Component: ViewNested,
  props: { stackSpace: "" },
});
