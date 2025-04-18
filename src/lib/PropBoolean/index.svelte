<script lang="ts">
	interface Props {
		value: boolean;
		name: string;
	}

	let { value = $bindable(), name }: Props = $props();

	let id = name.toLowerCase();
</script>

<style>
	label {
		font-weight: 800;
	}
</style>

<div class="l-cluster" style="--cluster-space--component: var(--s-4);">
	<label for={id}>{name}:</label>
	<input type="checkbox" {id} bind:checked={value} />
</div>
