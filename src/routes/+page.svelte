<script lang="ts">
	import FullPostCard from '$lib/components/FullPostCard.svelte';
	import ndkStore from '$lib/stores/ndk';
	// import { NDKUser } from '@nostr-dev-kit/ndk';
	import { artistNpub } from '$lib/config';

	// let hakusui: NDKUser = $ndkStore.getUser({npub: artistNpub})
	// console.log(hakusui)

	const eventsPromise = $ndkStore.fetchEvents({
		kinds: [1],
		authors: [artistNpub]
	});
	
	//console.log(eventsPromise)
</script>

<center>
<h1>Calligraphy Japan</h1>
<p><br />A gallery of Hakusui's finest calligraphy, imported from Nostr.</p>

{#await eventsPromise then events}
		{#each Array.from(events) as post}
			{#if post.pubkey == artistNpub}
				<FullPostCard {post} />
			{/if}
		{/each}
	{/await}
</center>

<style>
	h1 {
		color: white;
		font-weight: var(--font-weight-5);
		max-inline-size: var(--size-header-4);
		font-family: var(--font-2-sans);
		color: inherit;
	}

	p {
		max-inline-size: var(--size-content-3);
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-2-sans);
		font-weight: var(--font-weight-4);
	}

</style>
