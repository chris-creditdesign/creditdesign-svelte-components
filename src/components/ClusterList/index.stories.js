import ViewDefault from './view.default.svelte';
import ViewGrow from './view.grow.svelte';
import ViewSplit from './view.split.svelte';

export default {
  title: 'ClusterList',
};

export const Default = () => ({
  Component: ViewDefault
});

export const FlexEnd = () => ({
	Component: ViewDefault,
	props: { clusterJustifyContent: "flex-end" },
});

export const SpaceBetween = () => ({
	Component: ViewDefault,
	props: { clusterJustifyContent: "space-between" },
});

export const SpaceAround = () => ({
	Component: ViewDefault,
	props: { clusterJustifyContent: "space-around" },
});

export const Grow = () => ({
  Component: ViewGrow
});

export const ExtraSpace = () => ({
	Component: ViewDefault,
	props: { clusterSpace: "var(--s3)" },
});

export const Split = () => ({
  Component: ViewSplit
});
