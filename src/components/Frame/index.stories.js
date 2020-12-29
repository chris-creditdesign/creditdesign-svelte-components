import { withKnobs, number } from "@storybook/addon-knobs";
import Frame from "./view.default.svelte";
import ViewVideo from "./view.video.svelte";
import ViewPlaceHolder from "./view.place-holder.svelte";
import { frameRatioOptions } from "../preview-content/options.js";

export default {
  title: "Frame",
};

export const Default = () => ({
  Component: Frame,
  decorators: [withKnobs],
  props: {
    frameRatioHeight: number("frameRatioHeight", 9, frameRatioOptions),
    frameRatioWidth: number("frameRatioWidth", 16, frameRatioOptions),
  },
});

export const Video = () => ({
  Component: ViewVideo,
  decorators: [withKnobs],
  props: {
    frameRatioHeight: number("frameRatioHeight", 9, frameRatioOptions),
    frameRatioWidth: number("frameRatioWidth", 16, frameRatioOptions),
  },
});

export const PlaceHolderText = () => ({
  Component: ViewPlaceHolder,
  decorators: [withKnobs],
  props: {
    frameRatioHeight: number("frameRatioHeight", 9, frameRatioOptions),
    frameRatioWidth: number("frameRatioWidth", 16, frameRatioOptions),
  },
});
