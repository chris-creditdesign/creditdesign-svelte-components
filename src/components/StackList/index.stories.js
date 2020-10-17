import StackList from "./view.default.svelte";
import ViewSplitBefore from "./view.split-before.svelte";

export default {
  title: "StackList",
};

export const Default = () => ({
  Component: StackList,
  props: { stackSpace: "var(--s-1)" /* default */ },
});

export const ExtraSpace = () => ({
  Component: StackList,
  props: { stackSpace: "var(--s3)" },
});

export const SplitBefore = () => ({
  Component: ViewSplitBefore,
  props: { stackSpace: "var(--s-1)" /* default */ },
});
