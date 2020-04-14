import ViewDefault from './view.default.svelte';
import ViewThreeItems from './view.three-items.svelte';

export default {
  title: 'Cover',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test' },
});

export const ThreeItems = () => ({
  Component: ViewThreeItems,
  props: { className: 'test' },
});

export const NoSpace = () => ({
  Component: ViewThreeItems,
  props: { coverSpace: '0' },
});

export const HalfHeight = () => ({
  Component: ViewThreeItems,
  props: { coverHeight: '50vh' },
});
