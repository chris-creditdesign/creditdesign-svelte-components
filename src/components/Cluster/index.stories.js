import Cluster from "./view.default.svelte";
import ViewGrow from "./view.grow.svelte";
import ViewSplit from "./view.split.svelte";

export default {
  title: "Cluster",
};

export const Default = () => ({
  Component: Cluster,
  props: {
    clusterJustifyContent: "flex-start" /* default */,
    clusterSpace: "var(--s-1)" /* default */,
  },
});

export const FlexEnd = () => ({
  Component: Cluster,
  props: {
    clusterJustifyContent: "flex-end",
    clusterSpace: "var(--s-1)" /* default */,
  },
});

export const SpaceBetween = () => ({
  Component: Cluster,
  props: {
    clusterJustifyContent: "space-between",
    clusterSpace: "var(--s-1)" /* default */,
  },
});

export const SpaceAround = () => ({
  Component: Cluster,
  props: {
    clusterJustifyContent: "space-around",
    clusterSpace: "var(--s-1)" /* default */,
  },
});

export const Grow = () => ({
  Component: ViewGrow,
});

export const ExtraSpace = () => ({
  Component: Cluster,
  props: {
    clusterJustifyContent: "flex-start" /* default */,
    clusterSpace: "var(--s3)",
  },
});

export const Split = () => ({
  Component: ViewSplit,
});
