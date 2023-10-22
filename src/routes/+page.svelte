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

<h1>Calligraphy Japan</h1>
<h2>A gallery of Hakusui's finest calligraphy.</h2>
<p>Learn more about the artist <a href="/artist">here</a>!</p>
<p>My posts from Nostr:</p>

{#await eventsPromise then events}
		{#each Array.from(events) as post}
			{#if post.pubkey == artistNpub}
				<FullPostCard {post} />
			{/if}
		{/each}
	{/await}

<style>
	h1 {
		font-weight: var(--font-weight-5);
		font-family: var(--font-1-sans);
		color: var(--red-7)
	}

	p {
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-2-sans);
	}

	a {
		color: inherit;
		font-weight: var(--font-weight-3);
		font-size: var(--font-size-fluid-2);
		font-family: var(--font-1-sans);
	}

	a:hover {
		text-shadow: rgb(228, 139, 176) 1px 0 10px;
		text-decoration: none;
	}

</style>
