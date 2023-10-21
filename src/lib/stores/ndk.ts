import { browser } from '$app/environment';
import NDK from '@nostr-dev-kit/ndk';
import { writable } from 'svelte/store';
import { currentRelays } from '$lib/stores/relays'

const ndk = new NDK({
	explicitRelayUrls: currentRelays,
	debug: false
});
if (browser) {
	ndk.connect().then(() => console.log('NDK Connected'));
}
console.log('relays', ndk.explicitRelayUrls);

// Create a singleton instance that is the default export
const ndkStore = writable(ndk);

export default ndkStore;