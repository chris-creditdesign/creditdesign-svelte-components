import { withKnobs, select } from "@storybook/addon-knobs";
import StackList from "./view.default.svelte";
import ViewSplitAfter from "./view.split-after.svelte";
import { spaceOptions } from "../preview-content/options.js";

export default {
  title: "StackList",
};

export const Default = () => ({
  Component: StackList,
  decorators: [withKnobs],
  props: {
    stackSpace: select("stackSpace", spaceOptions, "var(--s-1)"),
  },
});

export const SplitAfter = () => ({
  Component: ViewSplitAfter,
  decorators: [withKnobs],
  props: {
    stackSpace: select("stackSpace", spaceOptions, "var(--s-1)"),
  },
});
