<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>{$page.status}: {$page.error?.message}</h1>

<p>Sorry, something went wrong.</p>

<a href="/">Go back home</a>
