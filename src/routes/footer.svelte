<script lang="ts">
	import * as config from '$lib/config';
</script>

<footer>
	<center>
		<p><b>{config.title}</b> &copy {new Date().getFullYear()} -- 
            Developed by <a href="https://sophwrk.io/" target="_blank">sophwrk</a> 
            at <a href="https://nostrgardn.com" target="_blank">nostrgardn</a></p>
	</center>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
	}

	p {
		color: var(--text-2);
        font-style: italic;
	}
</style>