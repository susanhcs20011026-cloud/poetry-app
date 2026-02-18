<script lang="ts">
    let { data } = $props();
</script>

<main class="prose">
    <h1>Poetry Database</h1>
    <p>Welcome to the poetry database. Browse {data.poets?.length || 0} poets and read their works.</p>

    <ul>
        {#each data.poets as poet}
            <li>
                <a href="/{encodeURIComponent(poet.name)}">{poet.name}</a> 
                ({poet.poemCount} poems);
            </li>
        {/each}
    </ul>
</main>