<script lang="ts">
	interface Props {
		options: string[];
		value: string;
		name: string;
	}

	let { options, value = $bindable(), name }: Props = $props();

	let id = name.toLowerCase();
</script>

<style>
	label {
		font-weight: 800;
	}
</style>

<div class="l-cluster" style="--cluster-space--component: var(--s-4);">
	<label for={id}>{name}:</label>
	<select {id} bind:value>
		{#each options as option}
			<option value={option}>
				{option}
			</option>
		{/each}
	</select>
</div>
