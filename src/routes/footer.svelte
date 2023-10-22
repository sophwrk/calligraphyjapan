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
		color: white;
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
	}

	a {
		color: white;
		font-weight: var(--font-weight-5);
		/* font-size: var(--font-size-fluid-2); */
		font-family: var(--font-2-sans);
	}

	a:hover {
		font-style: normal;
		text-shadow: white 1px 0 10px;
		color: white;
		text-decoration: none;
	}

</style>