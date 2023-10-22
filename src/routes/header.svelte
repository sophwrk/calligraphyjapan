<script lang="ts">
	import * as config from '$lib/config';
</script>

<center>
	<nav>
		<div><a href="/" class="title">{config.title}</a></div>
		
        <ul class="links">
            <li><a href="/artist">Hakusui</a></li>
            <li><a href="/gallery">Gallery</a></li>
        </ul>

        <button>🇯🇵</button>
	</nav>
</center>


<style>
	center {
		padding-left: 50px;
		padding-right: 50px;
		justify-content: space-evenly;
		align-items: center
	}
	div {
		align-self: normal;
		font-family: var(--font-1-sans);
	}
	button{
		height: 50px;
		width: 50px;
		color: var(--blue-6);
  		background-color: var(--red-5);
  		border: 2.5px solid var(--text-2);
		box-shadow: 0 0 0.5rem var(--color-shadow);
	}
	.title {
		color: var(--red-5);
	}
	nav {
        color: inherit;
		font-size: var(--font-size-fluid-1);
		font-weight: var(--font-weight-5);
		font-family: var(--font-2-sans);
		padding-block: var(--size-7);
	}
    .links {
        margin-block: var(--size-7);
    }
    a {
        color: var(--text-2);
    }
    a:hover {
		font-style: italic;
		text-shadow: var(--text-2) 1px 0 10px;
		color: var(--text-2);
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
			font-family: var(--font-2-sans);
			font-size: 30px;
			font-weight: var(--font-weight-4);
        }

		.links li {
			text-align: center;
		}

		.links li:first-child {
			margin-left: 25px;
		}

		.links li:last-child {
			margin-right: 200px;
		}
	}
</style>