<script>
  import Loader from "./loadingAnimation.svelte";
  import modalStatus from "$stores/modalStore";
</script>

<div class="container">
  {#if $modalStatus.done === false}
    <Loader />
  {/if}
  {#if $modalStatus.done === true}
    <p>Done</p>
  {/if}
</div>

<style>
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #111111bf;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 32px;
    color: var(--yellow);
  }
</style>
