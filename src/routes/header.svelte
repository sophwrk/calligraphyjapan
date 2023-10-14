<script lang="ts">
	import * as config from '$lib/config';
</script>

<center>
	<nav>
		<a href="/" class="title"><b>{config.title}</b></a>

        <ul class="links">
            <li><a href="/artist">Hakusui</a></li>
            <li><a href="/artist">page 2</a></li>
        </ul>

        <button>hi</button>
	</nav>
</center>

<style>
	nav {
		padding-block: var(--size-7);
	}
    .links {
        margin-block: var(--size-7);
    }
    a {
        color: inherit;
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