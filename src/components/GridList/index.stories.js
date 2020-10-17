import GridList from "./view.default.svelte";

export default {
  title: "GridList",
};

export const Default = () => ({
  Component: GridList,
  props: {
    gridSpace: "var(--s-1)" /* default */,
    gridColumnSpace: "" /* default */,
    gridRowSpace: "" /* default */,
    minWidth: "var(--measure-small)" /* default */,
  },
});

export const GridSpace = () => ({
  Component: GridList,
  props: {
    gridSpace: "var(--s3)",
    gridColumnSpace: "" /* default */,
    gridRowSpace: "" /* default */,
    minWidth: "var(--measure-small)" /* default */,
  },
});

export const GridColumnSpace = () => ({
  Component: GridList,
  props: {
    gridSpace: "",
    gridColumnSpace: "var(--s3)",
    gridRowSpace: "" /* default */,
    minWidth: "var(--measure-small)" /* default */,
  },
});

export const GridRowSpace = () => ({
  Component: GridList,
  props: {
    gridSpace: "",
    gridColumnSpace: "" /* default */,
    gridRowSpace: "var(--s3)",
    minWidth: "var(--measure-small)" /* default */,
  },
});

export const SmallMinWidth = () => ({
  Component: GridList,
  props: {
    gridSpace: "var(--s-1)" /* default */,
    gridColumnSpace: "" /* default */,
    gridRowSpace: "" /* default */,
    minWidth: "var(--s3)",
  },
});

export const LargeMinWidth = () => ({
  Component: GridList,
  props: {
    gridSpace: "var(--s-1)" /* default */,
    gridColumnSpace: "" /* default */,
    gridRowSpace: "" /* default */,
    minWidth: "var(--measure)",
  },
});
