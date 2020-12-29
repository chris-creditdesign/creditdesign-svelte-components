import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import Sidebar from "./view.default.svelte";
import {
  spaceOptions,
  measureOptions,
  percentOptions,
} from "../preview-content/options.js";

export default {
  title: "Sidebar",
};

export const Default = () => ({
  Component: Sidebar,
  decorators: [withKnobs],
  props: {
    sidebarContentMinWidth: select(
      "sidebarContentMinWidth",
      percentOptions,
      "50%"
    ),
    sidebarOnLeft: boolean("sidebarOnLeft", true),
    sidebarSpace: select("sidebarSpace", spaceOptions, "var(--s-1)"),
    sidebarWidth: select("sidebarWidth", measureOptions, "inherit"),
  },
});
