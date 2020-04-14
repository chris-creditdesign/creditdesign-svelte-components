import ViewDefault from './view.default.svelte';

export default {
  title: 'Box',
};

export const Default = () => ({
  Component: ViewDefault
});

export const ExtraSpace = () => ({
  Component: ViewDefault,
  props: { boxSpace: 'var(--s3)' },
});

export const NoSpace = () => ({
  Component: ViewDefault,
  props: { boxSpace: '0' },
});
