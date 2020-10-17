import Cover from "./view.default.svelte";
import ViewThreeItems from "./view.three-items.svelte";

export default {
  title: "Cover",
};

export const Default = () => ({
  Component: Cover,
  props: {
    coverHeight: "100vh" /* default */,
    coverSpace: "1rem" /* default */,
  },
});

export const ThreeItems = () => ({
  Component: ViewThreeItems,
  props: {
    coverHeight: "100vh" /* default */,
    coverSpace: "1rem" /* default */,
  },
});

export const NoSpace = () => ({
  Component: ViewThreeItems,
  props: {
    coverHeight: "100vh" /* default */,
    coverSpace: "0",
  },
});

export const HalfHeight = () => ({
  Component: ViewThreeItems,
  props: {
    coverHeight: "50vh",
    coverSpace: "1rem" /* default */,
  },
});
