<script lang="ts">
    let { children } = $props();
</script>

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 2rem; font-family: sans-serif;">
    <div style="width: 100%; max-width: 800px;">
        {@render children()}
    </div>
</div>