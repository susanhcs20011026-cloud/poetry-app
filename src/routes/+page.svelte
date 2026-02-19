<script lang="ts">
    import { base } from '$app/paths'; // 1. 必须引入这个变量
    let { data } = $props();
</script>

<main class="prose">
    <h1>Poetry Database</h1>
    <p>Welcome to the poetry database. Browse {data.poets?.length || 0} poets and read their works.</p>

    <ul>
        {#each data.poets as poet}
            <li>
                <a href="{base}/{encodeURIComponent(poet.name)}">
                    {poet.name}
                </a>
                ({poet.poemCount} poems);
            </li>
        {/each}
    </ul>
</main>