<script lang="ts">
	//import ndkStore from '$lib/stores/ndk';
	import type { NDKEvent } from '@nostr-dev-kit/ndk';
	import { artistNpub } from '$lib/config';
	import dayjs from 'dayjs';

	export let post: NDKEvent;
	console.log("full post: ", post);

	let content: string = post.content;

	function linkify(text: string) {
		var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
		var pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
		var emailAddressPattern = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;
		return text
			.replace(urlPattern, '<a href="$&" target="_blank">$&</a>')
			.replace(pseudoUrlPattern, '$1<a href="http://$2" target="_blank">$2</a>')
			.replace(emailAddressPattern, '<a href="mailto:$&" target="_blank">$&</a>');
	}

	function addLineBreaks(text: string) {
		var regex1 = /\n|\r{1}/gim;
		var regex2 = /<br>{2,}/gim;
		var revised = text.replace(regex1, '<br />');
		return revised.replace(regex2, '<br />');
	}

	function convertLinkToImage(text: string) {
		var imageHidingAsLinkPatternRegex =
			/<a\s+href="([^"]+\.(png|gif|webp|jpeg|jpg))"\s+target="_blank">([^<]+)<\/a>/g;
		var imageSuffixPatternRegex = /\.(png|gif|webp|jpeg|jpg)$/g;
		var br = '<br />';
		var p = '<p>&nbsp;</p>';
		return text.replace(imageHidingAsLinkPatternRegex, (_, link, alt) => {
			var alt = link.replace(/^https?:\/\//, '').replace(imageSuffixPatternRegex, '');
			return `<a href="${link}" target="_blank"><img src="${link}" 
  alt="${alt}"></a>`;
		});
	}
</script>

<div class="fullPostBlock">
	<p>{@html convertLinkToImage(addLineBreaks(linkify(content)))}</p>
	<h5><a href="https://primal.net/profile/{artistNpub}" target="_blank">-Hakusui</a></h5>
	<h6>
		{dayjs.unix(post.created_at ?? 0).format('M. D. YYYY')}<br />&nbsp;
	</h6>
</div>

<style>
	p, h6 {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-3);
		text-align: left;
		color: var(--text-1);
		font-family: var(--font-2-sans);
	}
	h5 {
		color: var(--text-2);
		font-size: 30px;
		font-weight: var(--font-weight-5);
		font-family: var(--font-1-sans);
		/* text-align: right; */
	}
	a {
		color: inherit;
	}
	a:hover {
		color: var(--text-2);
		text-decoration: none;
	}
	.fullPostBlock {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: max-content;
		margin-top: var(--size-4);
		padding-top: var(--size-4);
		padding-left: var(--size-7);
		padding-right: var(--size-6);
		padding-bottom: var(--size-3);
		margin-bottom: var(--size-2);
		background-color: var(--red-5);
		box-shadow: 0 0 0.5rem var(--color-shadow);
		border: 5px solid var(--text-2);
	}
</style>