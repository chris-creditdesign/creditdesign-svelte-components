import Frame from "./view.default.svelte";
import ViewVideo from "./view.video.svelte";
import ViewPlaceHolder from "./view.place-holder.svelte";

export default {
  title: "Frame",
};

export const Default = () => ({
  Component: Frame,
  props: {
    frameRatioHeight: 9 /* default */,
    frameRatioWidth: 16 /* default */,
  },
});

export const SquareAspectRatio = () => ({
  Component: Frame,
  props: {
    frameRatioHeight: 1,
    frameRatioWidth: 1,
  },
});

export const Video = () => ({
  Component: ViewVideo,
  props: {
    frameRatioHeight: 9 /* default */,
    frameRatioWidth: 16 /* default */,
  },
});

export const PlaceHolderText = () => ({
  Component: ViewPlaceHolder,
  props: {
    frameRatioHeight: 9 /* default */,
    frameRatioWidth: 16 /* default */,
  },
});
