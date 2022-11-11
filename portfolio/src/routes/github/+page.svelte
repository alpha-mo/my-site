<script>
  import Card from "$components/github/card.svelte";
  import repos from "$data/github/repos.json";
  import { fly } from "svelte/transition";
</script>

<div
  class="container"
  in:fly={{ y: 100, duration: 150, delay: 300, opacity: 0 }}
  out:fly={{ y: 100, duration: 150, opacity: 0, delay: 150 }}
>
  {#each repos as repo}
    <Card {repo} />
  {/each}
</div>

<style>
  .container {
    display: flex;
    width: 65%;
    padding: 5px;
    margin: 50px auto;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }
</style>
