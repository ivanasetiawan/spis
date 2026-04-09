<script>
  import "../app.css";
  let { children } = $props();
</script>

<svelte:head>
  <link
    rel="icon"
    href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌎</text></svg>"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;0,800;0,900;1,400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="min-h-screen bg-brand-bg text-brand-text font-body antialiased overflow-x-hidden"
>
  {@render children()}
</div>
