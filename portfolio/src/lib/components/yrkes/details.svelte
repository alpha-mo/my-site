<script>
  export let details;
  let show = false;
  const toggle = () => {
    show = !show;
  };
</script>

<div class="container">
  <h3>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    Competence details
    <span class="arrow" class:down={show} on:click={toggle}>&#8595;</span>
  </h3>
  <ul class:hidelist={!show}>
    {#each details as detail}
      <li>{detail}</li>
    {/each}
  </ul>
</div>

<style>
  .container {
    margin-left: 20px;
    width: fit-content;
  }
  .arrow {
    display: inline-block;
    margin-left: 10px;
    color: var(--cyan);
    cursor: pointer;
    transition: all 250ms ease;
  }
  .down {
    transform: rotate(90deg);
  }
  ul {
    content: none;
  }
  li {
    list-style: square;
    margin: 10px 0 0 30px;
  }
  .hidelist {
    display: none;
  }
  h3 {
    font-size: 20px;
  }
</style>
