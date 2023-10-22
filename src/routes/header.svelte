<script lang="ts">
	import * as config from '$lib/config';
</script>

<center>
	<nav>
		<a href="/" class="title"><b>{config.title}</b></a>

        <ul class="links">
            <li><a href="/artist">Hakusui</a></li>
            <li><a href="/gallery">Gallery</a></li>
        </ul>

        <button>🇯🇵</button>
	</nav>
</center>

<style>
	nav {
        color: inherit;
		font-size: var(--font-size-fluid-1);
		font-weight: var(--font-weight-5);
		font-family: var(--font-2-sans);
		padding-block: var(--size-7);
	}
    .links {
		font-size: var(--font-size-fluid-1);
		font-weight: var(--font-weight-4);
        margin-block: var(--size-7);
    }
    a {
        color: inherit;
    }
    a:hover {
		font-style: italic;
		text-shadow: white 1px 0 10px;
		color: white;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex; /*display was flex before absolute*/
			justify-content: space-between;
		}

        .links {
            display: flex;
            gap: var(--size-7);
            margin-block: 0;
        }
	}
</style>