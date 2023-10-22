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

<div class="flex-container">
	{#await eventsPromise then events}
	  {#each Array.from(events) as post}
		{#if post.pubkey == artistNpub}
		  <div class="post-card">
			<FullPostCard {post} />
		  </div>
		{/if}
	  {/each}
	{/await}
  </div>  
</center>

<style>
	.flex-container {
    	display: flex;
    	flex-wrap: wrap;
    	justify-content: space-around;
		align-items: center
  	}

	.post-card {
    	width: 300px;
    	margin: 10px;
  	}

	h1 {
		color: inherit;
		font-weight: var(--font-weight-5);
		font-size: 100px;
		max-inline-size: var(--size-header-4);
		font-family: var(--font-1-sans);
	}

	p {
		max-inline-size: var(--size-content-3);
		font-size: 30px;
		font-family: var(--font-2-sans);
		font-weight: var(--font-weight-4);
	}

</style>
