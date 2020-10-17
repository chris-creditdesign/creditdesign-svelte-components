import ViewDefault from './view.default.svelte';

export default {
  title: 'Grid',
};

export const Default = () => ({
  Component: ViewDefault
});


export const GridSpace = () => ({
  Component: ViewDefault,
  props: { gridSpace: 'var(--s3)' },
});

export const GridColumnSpace = () => ({
  Component: ViewDefault,
  props: { gridColumnSpace: 'var(--s3)' },
});

export const GridRowSpace = () => ({
  Component: ViewDefault,
  props: { gridRowSpace: 'var(--s3)' },
});

export const SmallMinWidth = () => ({
  Component: ViewDefault,
  props: { minWidth: 'var(--s3)' },
});

export const LargeMinWidth = () => ({
  Component: ViewDefault,
  props: { minWidth: 'var(--measure)' },
});

