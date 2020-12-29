import { withKnobs, select } from "@storybook/addon-knobs";
import ClusterList from "./view.default.svelte";
import ViewGrow from "./view.grow.svelte";
import ViewSplit from "./view.split.svelte";
import {
  spaceOptions,
  justifyContentOptions,
} from "../preview-content/options.js";

export default {
  title: "ClusterList",
};

export const Default = () => ({
  Component: ClusterList,
  decorators: [withKnobs],
  props: {
    clusterJustifyContent: select(
      "clusterJustifyContent",
      justifyContentOptions,
      "flex-start"
    ),
    clusterSpace: select("clusterSpace", spaceOptions, "var(--s-1)"),
  },
});

export const Grow = () => ({
  Component: ViewGrow,
  decorators: [withKnobs],
  props: {
    clusterJustifyContent: select(
      "clusterJustifyContent",
      justifyContentOptions,
      "flex-start"
    ),
    clusterSpace: select("clusterSpace", spaceOptions, "var(--s-1)"),
  },
});

export const Split = () => ({
  Component: ViewSplit,
  decorators: [withKnobs],
  props: {
    clusterJustifyContent: select(
      "clusterJustifyContent",
      justifyContentOptions,
      "flex-start"
    ),
    clusterSpace: select("clusterSpace", spaceOptions, "var(--s-1)"),
  },
});
