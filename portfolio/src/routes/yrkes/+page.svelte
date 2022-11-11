<script>
  import Cards from "$components/yrkes/Cards.svelte";
  import { fly } from "svelte/transition";
</script>

<div
  class="container"
  in:fly={{ y: 100, duration: 150, delay: 300, opacity: 0 }}
  out:fly={{ y: 100, duration: 150, opacity: 0, delay: 150 }}
>
  <h1>Systems Development</h1>
  <p>
    my studies with Yrkesakademin consist of a combo of both front and back-end
    courses on building systems architecture.
    <span class="note"> here's a list of all the topics implemented: </span>
  </p>
  <Cards />
</div>

<style>
  .container {
    width: fit-content;
    margin: 50px auto;
  }
  .note {
    display: inline-block;
    color: var(--yellow-light);
    margin-top: 5px;
  }
  h1 {
    font-size: 42px;
  }
  p,
  h1 {
    padding: 20px;
  }
  @media (max-width: 1090px) {
    h1 {
      font-size: 38px;
    }
  }
  @media (max-width: 930px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (min-width: 910px) {
    p {
      width: 52pc;
      margin-left: 10px;
    }
  }
</style>
