<script>
  import { fly } from "svelte/transition";
</script>

<div
  class="container"
  in:fly={{ y: 100, duration: 150, delay: 300, opacity: 0 }}
  out:fly={{ y: 100, duration: 150, opacity: 0, delay: 150 }}
>
  <div class="name">
    <p class="c-yellow">My name is</p>
    <h1>Mohamad Ojail</h1>
    <h2 class="c-yellowish">Full-Stack developer student</h2>
  </div>
  <p class="about">
    Currently studying a <span class="c-orange">Systems-dev</span> course, and since
    I'm graduating on may-2023 I'm using this page as a demo for future employers.
  </p>
  <p class="about">
    Please consider visiting my <span><a href="/github">Github page</a></span> to
    see some demos.
  </p>
</div>

<style>
  .about {
    max-width: 38pc;
  }
  .container {
    width: fit-content;
    margin: 0 auto;
    padding: 100px 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
  }

  @media (max-width: 869px) {
    h1 {
      font-size: 32px;
    }
    h2 {
      font-size: 26px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (max-width: 435px) {
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
    }
  }
</style>
