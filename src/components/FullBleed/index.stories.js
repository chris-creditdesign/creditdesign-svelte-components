import FullBleed from "./view.default.svelte";

export default {
  title: "FullBleed",
};

export const Default = () => ({
  Component: FullBleed,
  props: {
    fullBleedStackSpace: "var(--s-1)" /* default */,
    fullBleedSideSpace: "var(--s-1)" /* default */,
    fullBleedMeasure: "var(--measure)" /* default */,
  },
});

export const SmallMeasure = () => ({
  Component: FullBleed,
  props: {
    fullBleedStackSpace: "var(--s-1)" /* default */,
    fullBleedSideSpace: "var(--s-1)" /* default */,
    fullBleedMeasure: "var(--measure-small)",
  },
});

export const MoreSpace = () => ({
  Component: FullBleed,
  props: {
    fullBleedStackSpace: "var(--s-1)" /* default */,
    fullBleedSideSpace: "var(--s3)",
    fullBleedMeasure: "var(--measure)" /* default */,
  },
});

export const NoSpace = () => ({
  Component: FullBleed,
  props: {
    fullBleedStackSpace: "var(--s-1)" /* default */,
    fullBleedSideSpace: "0",
    fullBleedMeasure: "var(--measure)" /* default */,
  },
});

export const ExtraStackSpace = () => ({
  Component: FullBleed,
  props: {
    fullBleedStackSpace: "var(--s3)",
    fullBleedSideSpace: "var(--s-1)" /* default */,
    fullBleedMeasure: "var(--measure)" /* default */,
  },
});
