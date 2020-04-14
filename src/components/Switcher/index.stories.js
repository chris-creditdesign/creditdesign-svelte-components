import ViewDefault from './view.default.svelte';

export default {
  title: 'Switcher',
};

export const Default = () => ({
  Component: ViewDefault,
  props: { className: 'test' },
});

export const SmallMin = () => ({
	Component: ViewDefault,
	props: { className: 'test', switcherMinWidth: 'var(--measure-small)'}
});

export const LargeMin = () => ({
	Component: ViewDefault,
	props: { className: 'test', switcherMinWidth: 'var(--measure-big)'}
});

export const ExtraSpace = () => ({
	Component: ViewDefault,
	props: { className: 'test', switcherSpace: 'var(--s3)'}
});