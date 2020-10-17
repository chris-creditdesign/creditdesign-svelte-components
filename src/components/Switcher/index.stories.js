import ViewDefault from './view.default.svelte';
import ViewSevenElements from './view.seven-elements.svelte';
import ViewEightElements from './view.eight-elements.svelte';

export default {
  title: 'Switcher',
};

export const Default = () => ({
  Component: ViewDefault
});

export const SmallMin = () => ({
	Component: ViewDefault,
	props: { switcherMinWidth: 'var(--measure-small)'}
});

export const LargeMin = () => ({
	Component: ViewDefault,
	props: { switcherMinWidth: 'var(--measure-big)'}
});

export const ExtraSpace = () => ({
	Component: ViewDefault,
	props: { switcherSpace: 'var(--s3)'}
});

export const SevenElements = () => ({
  Component: ViewSevenElements
});

export const EightElements = () => ({
  Component: ViewEightElements
});
