import ViewDefault from './view.default.svelte';
import ViewSevenElements from './view.seven-elements.svelte';
import ViewEightElements from './view.eight-elements.svelte';

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

export const SevenElements = () => ({
  Component: ViewSevenElements,
  props: { className: 'test' },
});

export const EightElements = () => ({
  Component: ViewEightElements,
  props: { className: 'test' },
});
