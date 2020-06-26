<script>
  import Nav from "../components/Nav.svelte";
</script>

<style>
  main {
    position: relative;
    padding: 5vh 6vw;
    box-sizing: border-box;
    box-shadow: -1px -2px 2px 0px rgba(133, 133, 133, 0.65);
    height: 100%;
  }
</style>

<Nav />
<main>
  <slot />

</main>
