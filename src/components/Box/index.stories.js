import { withKnobs, select } from "@storybook/addon-knobs";
import Box from "./view.default.svelte";
import { spaceOptions } from "../preview-content/options.js";

export default {
  title: "Box",
};

export const Default = () => ({
  Component: Box,
  decorators: [withKnobs],
  props: {
    boxSpace: select("boxSpace", spaceOptions, "var(--s-1)"),
  },
});
