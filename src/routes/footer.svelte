<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<center>
		<div>{config.title} &copy {new Date().getFullYear()}</div>
		<p><i>Developed by <a href="https://sophwrk.io/" target="_blank">sophwrk</a> 
            at <a href="https://nostrgardn.com" target="_blank">nostrgardn</a></i></p>
	</center>
</footer>

<style>
	div {
		color: var(--text-2);
		max-inline-size: var(--size-content-3);
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-1-sans);
	}

	footer {
		padding-block: var(--size-7);
	}

	p {
		max-inline-size: var(--size-content-3);
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-2-sans);
		font-weight: var(--font-weight-3);
	}

	a {
		color: var(--text-2);
		font-weight: var(--font-weight-5);
		font-family: var(--font-2-sans);
	}

	a:hover {
		font-style: normal;
		text-shadow: var(--text-2) 1px 0 10px;
		color: var(--text-2);
		text-decoration: none;
	}

</style>