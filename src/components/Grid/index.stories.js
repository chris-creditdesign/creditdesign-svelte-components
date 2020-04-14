import ViewDefault from './view.default.svelte';

export default {
  title: 'Grid',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test' },
});

export const WithExtraSpace = () => ({
  Component: ViewDefault,
  props: { className: 'test', gridSpace: 'var(--s3)' },
});
