import ViewDefault from './view.default.svelte';
import ViewSplitBefore from './view.split-before.svelte';
import ViewText from './view.text.svelte';

export default {
  title: 'Stack',
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

export const Text = () => ({
  Component: ViewText
});
