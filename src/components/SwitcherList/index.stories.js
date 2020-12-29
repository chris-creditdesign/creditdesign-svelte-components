import { withKnobs, select } from "@storybook/addon-knobs";
import SwitcherList from "./view.default.svelte";
import ViewSevenElements from "./view.seven-elements.svelte";
import ViewEightElements from "./view.eight-elements.svelte";
import { spaceOptions, measureOptions } from "../preview-content/options.js";

export default {
  title: "SwitcherList",
};

export const Default = () => ({
  Component: SwitcherList,
  decorators: [withKnobs],
  props: {
    switcherMinWidth: select(
      "switcherMinWidth",
      measureOptions,
      "var(--measure)"
    ),
    switcherSpace: select("switcherSpace", spaceOptions, "var(--s-1)"),
  },
});

export const SevenElements = () => ({
  Component: ViewSevenElements,
  decorators: [withKnobs],
  props: {
    switcherMinWidth: select(
      "switcherMinWidth",
      measureOptions,
      "var(--measure)"
    ),
    switcherSpace: select("switcherSpace", spaceOptions, "var(--s-1)"),
  },
});

export const EightElements = () => ({
  Component: ViewEightElements,
  decorators: [withKnobs],
  props: {
    switcherMinWidth: select(
      "switcherMinWidth",
      measureOptions,
      "var(--measure)"
    ),
    switcherSpace: select("switcherSpace", spaceOptions, "var(--s-1)"),
  },
});
