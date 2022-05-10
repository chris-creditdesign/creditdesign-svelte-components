<script lang="ts">
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
</script>

<style>
	.sidebar__main-content, .sidebar__content {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 100px;
		max-width: none;
		background-color: lightblue;
	}

	.sidebar__main-content {
		height: 50vh;
	}

	.sidebar__content {
		min-height: 100px;
		background-color: pink;
	}
</style>

# Sidebar - CSS class

Can also be applied as as standalone CSS class. If you'd like the sidebar to appear on the right/below you should add the additional class `.sidebar-on-right`. The default is for the sidebar to be on the left/above.

## Default

```html
<div class="sidebar">
	<div>Sidebar</div>
	<div>Main content</div>
</div>
```

<SqueezeContainer>
	<div class="sidebar">
		<div class="sidebar__content">Sidebar</div>
		<div class="sidebar__main-content">Main content</div>
	</div>
</SqueezeContainer>

## Sidebar on right

```html
<div class="sidebar sidebar-on-right">
	<div>Main content</div>
	<div>Sidebar</div>
</div>
```

<SqueezeContainer>
	<div class="sidebar sidebar-on-right">
		<span class="sidebar__main-content">Main content</span>
		<span class="sidebar__content">Sidebar</span>
	</div>
</SqueezeContainer>

## With CSS custom properties appiled

```html
<div
	class="sidebar"
	style="--sidebar-content-min-width--component: 50%; --sidebar-space--component: var(--s2); --sidebar-width--component: 30ch;"
>
	<div>Sidebar</div>
	<div>Main content</div>
</div>
```

<SqueezeContainer>
	<div class="sidebar" style="--sidebar-content-min-width--component: 50%; --sidebar-space--component: var(--s2); --sidebar-width--component: 30ch;">
		<div class="sidebar__content">Sidebar</div>
		<div class="sidebar__main-content">Main content</div>
	</div>
</SqueezeContainer>
