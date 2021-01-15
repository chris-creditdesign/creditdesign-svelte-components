import { withKnobs, select } from "@storybook/addon-knobs";
import FullBleed from "./view.default.svelte";
import ViewTextAndImage from "./view.text-and-image.svelte";
import { spaceOptions, measureOptions } from "../preview-content/options.js";

export default {
  title: "FullBleed",
};

export const Default = () => ({
  Component: FullBleed,
  decorators: [withKnobs],
  props: {
    fullBleedMeasure: select(
      "fullBleedMeasure",
      measureOptions,
      "var(--measure)"
    ),
    fullBleedSideSpace: select(
      "fullBleedSideSpace",
      spaceOptions,
      "var(--s-1)"
    ),
    fullBleedStackSpace: select(
      "fullBleedStackSpace",
      spaceOptions,
      "var(--s-1)"
    ),
  },
});

export const TextAndImage = () => ({
  Component: ViewTextAndImage,
  decorators: [withKnobs],
  props: {
    fullBleedMeasure: select(
      "fullBleedMeasure",
      measureOptions,
      "var(--measure)"
    ),
    fullBleedSideSpace: select(
      "fullBleedSideSpace",
      spaceOptions,
      "var(--s-1)"
    ),
    fullBleedStackSpace: select(
      "fullBleedStackSpace",
      spaceOptions,
      "var(--s-1)"
    ),
  },
});
