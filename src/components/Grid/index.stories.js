import Grid from "./view.default.svelte";

export default {
  title: "Grid",
};

export const Default = () => ({
  Component: Grid,
  props: {
    gridSpace: "var(--s-1)" /* default */,
    gridColumnSpace: "" /* default */,
    gridRowSpace: "" /* default */,
    minWidth: "var(--measure-small)" /* default */,
  },
});

export const GridSpace = () => ({
  Component: Grid,
  props: {
    gridSpace: "var(--s3)",
    gridColumnSpace: "" /* default */,
    gridRowSpace: "" /* default */,
    minWidth: "var(--measure-small)" /* default */,
  },
});

export const GridColumnSpace = () => ({
  Component: Grid,
  props: {
    gridSpace: "",
    gridColumnSpace: "var(--s3)",
    gridRowSpace: "" /* default */,
    minWidth: "var(--measure-small)" /* default */,
  },
});

export const GridRowSpace = () => ({
  Component: Grid,
  props: { gridRowSpace: "var(--s3)" },
  props: {
    gridSpace: "",
    gridColumnSpace: "" /* default */,
    gridRowSpace: "var(--s3)",
    minWidth: "var(--measure-small)" /* default */,
  },
});

export const SmallMinWidth = () => ({
  Component: Grid,
  props: { minWidth: "var(--s3)" },
  props: {
    gridSpace: "var(--s-1)" /* default */,
    gridColumnSpace: "" /* default */,
    gridRowSpace: "" /* default */,
    minWidth: "var(--s3)",
  },
});

export const LargeMinWidth = () => ({
  Component: Grid,
  props: { minWidth: "var(--measure)" },
  props: {
    gridSpace: "var(--s-1)" /* default */,
    gridColumnSpace: "" /* default */,
    gridRowSpace: "" /* default */,
    minWidth: "var(--measure)",
  },
});
