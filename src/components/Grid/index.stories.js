import ViewDefault from './view.default.svelte';

export default {
  title: 'Grid',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test' },
});

export const ExtraSpace = () => ({
  Component: ViewDefault,
  props: { className: 'test', gridColumnSpace: 'var(--s3)', gridRowSpace: 'var(--s3)' },
});

export const ExtraColumnSpace = () => ({
  Component: ViewDefault,
  props: { className: 'test', gridColumnSpace: 'var(--s3)' },
});

export const ExtraRowSpace = () => ({
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

