import ViewDefault from './view.default.svelte';
import ViewMultipleWidths from './view.multiple-widths.svelte';
import ViewMultipleStacks from './view.multiple-stacks.svelte';

export default {
  title: 'Center',
};

export const Default = () => ({
  Component: ViewDefault
});

export const SmallerMeasure = () => ({
  Component: ViewDefault,
  props: { centerMeasure: 'var(--measure-small)' },
});

export const LargerMeasure = () => ({
  Component: ViewDefault,
  props: { centerMeasure: 'var(--measure-big)' },
});

export const LargerSpace = () => ({
  Component: ViewDefault,
  props: { centerSpace: 'var(--s3)' },
});

export const MultipleWidths = () => ({
  Component: ViewMultipleWidths,
});

export const MulitpleStacks = () => ({
	Component: ViewMultipleStacks,
});
