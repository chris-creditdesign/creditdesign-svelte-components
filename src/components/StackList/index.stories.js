import ViewDefault from './view.default.svelte';
import ViewSplitBefore from './view.split-before.svelte';

export default {
  title: 'StackList',
};

export const Default = () => ({
  Component: ViewDefault
});

export const ExtraSpace = () => ({
  Component: ViewDefault,
  props: { stackSpace: 'var(--s3)' },
});

export const SplitBefore = () => ({
  Component: ViewSplitBefore
});

