<script>
  import data from "$data/about/yrkes-items.json";
  import Card from "$components/yrkes/details.svelte";
</script>

<div class="container">
  {#each data as item}
    <div class="card">
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <Card details={item.details} />
    </div>
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  p {
    max-width: 40pc;
    margin-block: 10px;
  }
  h3 {
    font-size: 24px;
    color: var(--orange);
  }
  .card {
    padding-inline: 30px;
  }
</style>
