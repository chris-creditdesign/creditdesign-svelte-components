import ViewDefault from './view.default.svelte';

export default {
  title: 'Grid',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test' },
});


export const GridSpace = () => ({
  Component: ViewDefault,
  props: { className: 'test', gridSpace: 'var(--s3)' },
});

export const GridColumnSpace = () => ({
  Component: ViewDefault,
  props: { className: 'test', gridColumnSpace: 'var(--s3)' },
});

export const GridRowSpace = () => ({
  Component: ViewDefault,
  props: { className: 'test', gridRowSpace: 'var(--s3)' },
});

export const SmallMinWidth = () => ({
  Component: ViewDefault,
  props: { className: 'test', minWidth: 'var(--s3)' },
});

export const LargeMinWidth = () => ({
  Component: ViewDefault,
  props: { className: 'test', minWidth: 'var(--measure)' },
});

