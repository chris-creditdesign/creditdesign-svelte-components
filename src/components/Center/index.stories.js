import { withKnobs, select } from "@storybook/addon-knobs";
import Center from "./view.default.svelte";
import { spaceOptions, measureOptions } from "../preview-content/options.js";

export default {
  title: "Center",
};

export const Default = () => ({
  Component: Center,
  decorators: [withKnobs],
  props: {
    centerMeasure: select("centerMeasure", measureOptions, "var(--measure)"),
    centerSpace: select("centerSpace", spaceOptions, "var(--s-1)"),
  },
});
