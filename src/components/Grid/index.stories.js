import { withKnobs, select } from "@storybook/addon-knobs";
import Grid from "./view.default.svelte";
import { spaceOptions, measureOptions } from "../preview-content/options.js";

export default {
  title: "Grid",
};

export const Default = () => ({
  Component: Grid,
  decorators: [withKnobs],
  props: {
    gridColumnSpace: select("gridColumnSpace", spaceOptions, "var(--s-1)"),
    gridRowSpace: select("gridRowSpace", spaceOptions, "var(--s-1)"),
    gridSpace: select("gridSpace", spaceOptions, "var(--s-1)"),
    minWidth: select("minWidth", measureOptions, "var(--measure-small)"),
  },
});
