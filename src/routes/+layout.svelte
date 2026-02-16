<script>
  import '../app.css';
</script>

<svelte:head>
  <title>RecipeHub</title>
  <link rel="icon" href="/favicon.png" />
</svelte:head>

<div class="app">
  <slot />
</div>

<style>
  :global(.app) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
