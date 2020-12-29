import { withKnobs, select } from "@storybook/addon-knobs";
import Cluster from "./view.default.svelte";
import ViewGrow from "./view.grow.svelte";
import ViewSplit from "./view.split.svelte";
import {
  spaceOptions,
  justifyContentOptions,
} from "../preview-content/options.js";

export default {
  title: "Cluster",
};

export const Default = () => ({
  Component: Cluster,
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
