import ViewDefault from './view.default.svelte';
import ViewVideo from './view.video.svelte';
import ViewPlaceHolder from './view.place-holder.svelte';

export default {
  title: 'Frame',
};

export const Default = () => ({
  Component: ViewDefault
});

export const SquareAspectRatio = () => ({
  Component: ViewDefault,
  props: {
	  frameRatioHeight: '1',
	  frameRatioWidth: '1'
	},
});

export const Video = () => ({
	Component: ViewVideo
})

export const PlaceHolderText = () => ({
  Component: ViewPlaceHolder
});