/*
this page set up to manage the relays that we are using;
pretty much we only use what's in the currentRelays array
*/

///// the CURRENT relays that we are pulling from, reacting on, zapping on, etc.
export const currentRelays = [
	'wss://feedstr.nostr1.com',
    'wss://purplepag.es',
    'wss://relay.damus.io',
    'wss://nos.lol',
	'wss://nostr-pub.wellorder.net',
    'wss://yabu.me',
    'wss://relay-jp.nostr.wirednet.jp',
    'wss://nostr-relay.nokotaro.com'
]

///// these are the primary relays that ARTIST Hakusui posts to
export const artistRelays = [
    'wss://yabu.me',
	'wss://feedstr.nostr1.com',
    'wss://purplepag.es',
    'wss://relay.damus.io',
    'wss://nos.lol',
	'wss://nostr-pub.wellorder.net'
]

///// longer list of TRUSTED relays that can potentially be used
export const trustedRelays = [
	'wss://feedstr.nostr1.com',
    'wss://purplepag.es',
    'wss://relay.damus.io',
    'wss://nos.lol',
	'wss://nostr-pub.wellorder.net',
	'wss://relay.snort.social'
]

///// JAPANESE relays
export const japaneseRelays = [
    'wss://yabu.me',
    'wss://relay-jp.nostr.wirednet.jp',
    'wss://nostr-relay.nokotaro.com',
	'wss://relay-jp.nostr.moctane.com'
]

///// PROFILE relays
export const profileRelay = ['wss://purplepag.es']

///// TESTING relays (to limit potentially embarrassing test posts)
export const testingRelays = [
	'wss://purplepag.es',
	'wss://feedstr.nostr1.com'
]
export const testingRelay = 'wss://feedstr.nostr1.com';

