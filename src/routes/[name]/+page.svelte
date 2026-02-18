<script lang="ts">
    import type { Poem } from '$lib';
    let { data } = $props();

    let searchQuery = $state("");

    let filteredPoems = $derived(
        searchQuery.trim() === "" 
            ? data.poetData.poems 
            : data.poetData.poems.filter((p: Poem) => {
                const query = searchQuery.toLowerCase();
                const titleMatch = p.title.toLowerCase().includes(query);
                const lineMatch = p.poem.some(line => line.toLowerCase().includes(query));
                return titleMatch || lineMatch;
            })
    );
</script>

<main class="prose max-w-none prose-hr:hidden">
    <a href="/" class="no-underline text-blue-500 text-sm">← Return to Main List</a>
    
    <h1 class="mt-4">Poems of {data.poetData.name}</h1>

    <div class="not-prose my-8">
        <input 
            type="text" 
            bind:value={searchQuery}
            placeholder="Filter poems by title or content..." 
            class="w-full py-3 px-4 text-lg border-2 border-slate-200 rounded-xl shadow-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
        />
    </div>

    <section>
        <h2 class="text-xl">
            {filteredPoems.length} {filteredPoems.length === 1 ? 'poem' : 'poems'}
        </h2>
        
        {#if filteredPoems.length > 0}
            <ul class="list-none pl-0"> {#each filteredPoems as poem}
                    <li class="my-1">
                        <a href="#{poem.title}" class="text-blue-600 no-underline hover:underline">
                            {poem.title}
                        </a>
                    </li>
                {/each}
            </ul>
        {:else}
            <p class="italic text-gray-500">No poems match your search.</p>
        {/if}
    </section>

    <section class="space-y-12 mt-16">
        {#each filteredPoems as poem}
            <article id={poem.title} class="scroll-mt-10">
                <h2 class="m-0 text-2xl font-bold">{poem.title}</h2>
                <div class="italic text-gray-800 font-serif mt-4">
                    {#each poem.poem as line}
                        <p class="my-0 leading-relaxed">{line}</p>
                    {/each}
                </div>
            </article>
        {/each}
    </section>
</main>