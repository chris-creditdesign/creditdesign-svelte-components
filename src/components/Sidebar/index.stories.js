import Sidebar from "./view.default.svelte";

export default {
  title: "Sidebar",
};

export const Default = () => ({
  Component: Sidebar,
  props: {
    sidebarWidth: "inherit" /* defalut */,
    sidebarContentMinWidth: "50%;" /* defalut */,
    sidebarSpace: "var(--s-1)" /* defalut */,
    sidebarOnRight: true /* defalut */,
  },
});

export const SidebarOnLeft = () => ({
  Component: Sidebar,
  props: {
    sidebarWidth: "inherit" /* defalut */,
    sidebarContentMinWidth: "50%;" /* defalut */,
    sidebarSpace: "var(--s-1)" /* defalut */,
    sidebarOnRight: false,
  },
});

export const ExtraSpace = () => ({
  Component: Sidebar,
  props: {
    sidebarWidth: "inherit" /* defalut */,
    sidebarContentMinWidth: "50%;" /* defalut */,
    sidebarSpace: "var(--s3)",
    sidebarOnRight: true /* defalut */,
  },
});

export const SetWidth = () => ({
  Component: Sidebar,
  props: {
    sidebarWidth: "var(--measure)",
    sidebarContentMinWidth: "50%;" /* defalut */,
    sidebarSpace: "var(--s-1)" /* defalut */,
    sidebarOnRight: true /* defalut */,
  },
});

export const LargeMinWidth = () => ({
  Component: Sidebar,
  props: {
    sidebarWidth: "inherit" /* defalut */,
    sidebarContentMinWidth: "80%;",
    sidebarSpace: "var(--s-1)" /* defalut */,
    sidebarOnRight: true /* defalut */,
  },
});