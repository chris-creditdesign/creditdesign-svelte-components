import { withKnobs, select } from "@storybook/addon-knobs";
import Cover from "./view.default.svelte";
import ViewThreeItems from "./view.three-items.svelte";
import { spaceOptions, heightOptions } from "../preview-content/options.js";

export default {
  title: "Cover",
};

export const Default = () => ({
  Component: Cover,
  decorators: [withKnobs],
  props: {
    coverHeight: select("coverHeight", heightOptions, "100vh"),
    coverSpace: select("coverSpace", spaceOptions, "var(--s-1)"),
  },
});

export const ThreeItems = () => ({
  Component: ViewThreeItems,
  decorators: [withKnobs],
  props: {
    coverHeight: select("coverHeight", heightOptions, "100vh"),
    coverSpace: select("coverSpace", spaceOptions, "var(--s-1)"),
  },
});
