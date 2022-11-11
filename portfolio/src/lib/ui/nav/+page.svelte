<script>
  import List from "./list.svelte";
  import Burger from "$ui/burger/+page.svelte";
  import Logo from "$ui/logo/+page.svelte";
  import Mobile from "./mobile.svelte";
</script>

<nav>
  <Logo />
  <List />
  <Burger />
  <Mobile />
</nav>

<style>
  nav {
    width: 100%;
    padding: 15px 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
</style>
