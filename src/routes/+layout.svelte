<script lang="ts">
    // 只有当 app.css 确实存在于 src/app.css 时才取消下面这行的注释
    // import "../app.css"; 
    let { children } = $props();
</script>

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; padding: 2rem; font-family: sans-serif;">
    <div style="width: 100%; max-width: 800px;">
        {@render children()}
    </div>
</div>