import SwitcherList from "./view.default.svelte";
import ViewSevenElements from "./view.seven-elements.svelte";
import ViewEightElements from "./view.eight-elements.svelte";

export default {
  title: "SwitcherList",
};

export const Default = () => ({
  Component: SwitcherList,
  props: {
    switcherSpace: "var(--s-1)" /* default */,
    switcherMinWidth: "var(--measure)" /* default */,
  },
});

export const SmallMin = () => ({
  Component: SwitcherList,
  props: {
    switcherSpace: "var(--s-1)" /* default */,
    switcherMinWidth: "var(--measure-small)",
  },
});

export const LargeMin = () => ({
  Component: SwitcherList,
  props: {
    switcherSpace: "var(--s-1)" /* default */,
    switcherMinWidth: "var(--measure-big)",
  },
});

export const ExtraSpace = () => ({
  Component: SwitcherList,
  props: {
    switcherSpace: "var(--s3)",
    switcherMinWidth: "var(--measure)" /* default */,
  },
});

export const SevenElements = () => ({
  Component: ViewSevenElements,
});

export const EightElements = () => ({
  Component: ViewEightElements,
});
