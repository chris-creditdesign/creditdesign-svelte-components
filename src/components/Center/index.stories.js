import Center from "./view.default.svelte";
import ViewMultipleWidths from "./view.multiple-widths.svelte";
import ViewMultipleStacks from "./view.multiple-stacks.svelte";

export default {
  title: "Center",
};

export const Default = () => ({
  Component: Center,
  props: {
    centerSpace: "var(--s-1)" /* default */,
    centerMeasure: "var(--measure)" /* default */,
  },
});

export const SmallerMeasure = () => ({
  Component: Center,
  props: {
    centerSpace: "var(--s-1)" /* default */,
    centerMeasure: "var(--measure-small)",
  },
});

export const LargerMeasure = () => ({
  Component: Center,
  props: {
    centerSpace: "var(--s-1)" /* default */,
    centerMeasure: "var(--measure-big)",
  },
});

export const LargerSpace = () => ({
  Component: Center,
  props: {
    centerSpace: "var(--s3)",
    centerMeasure: "var(--measure)" /* default */,
  },
});

export const MultipleWidths = () => ({
  Component: ViewMultipleWidths,
});

export const MulitpleStacks = () => ({
  Component: ViewMultipleStacks,
});
