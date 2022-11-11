<script>
  import Cards from "$components/own/cards.svelte";
  import { fly } from "svelte/transition";
</script>

<div
  class="container"
  in:fly={{ y: 100, duration: 150, delay: 300, opacity: 0 }}
  out:fly={{ y: 100, duration: 150, opacity: 0, delay: 150 }}
>
  <h1>Constant development!</h1>
  <p>
    To work as a developer means that you are in a constant need of learning new
    things. Here's a short list of some of the things I keep myself updated
    about:
    <span class="note">
      (most of the lists shown here are up to change due to the fact that new
      technologies are more likely to pop up!)
    </span>
  </p>
  <Cards />
</div>

<style>
  .container {
    width: fit-content;
    margin: 50px auto;
  }
  h1 {
    font-size: 42px;
  }
  p,
  h1 {
    padding: 20px;
  }
  .note {
    display: inline-block;
    font-size: 16px;
    color: var(--yellow-light);
    margin-top: 5px;
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
      width: 53pc;
      margin-left: 10px;
    }
  }
</style>
