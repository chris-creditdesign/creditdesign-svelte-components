import { withKnobs, select } from "@storybook/addon-knobs";
import Stack from "./view.default.svelte";
import ViewSplitAfter from "./view.split-after.svelte";
import { spaceOptions } from "../preview-content/options.js";

export default {
  title: "Stack",
};

export const Default = () => ({
  Component: Stack,
  decorators: [withKnobs],
  props: {
    stackSpace: select("stackSpace", spaceOptions, "var(--s-1)"),
  },
});

export const SplitAfter = () => ({
  Component: ViewSplitAfter,
  props: {
    stackSpace: select("stackSpace", spaceOptions, "var(--s-1)"),
  },
});
