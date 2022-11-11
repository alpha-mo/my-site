<script>
  import "$styles/colors.css";
  import "$styles/font_and_sizes.css";
  import "$styles/app.css";
  import Nav from "$ui/nav/+page.svelte";
  import Modal from "$ui/modal/+page.svelte";
  import modalStatus from "$stores/modalStore";
</script>

<svelte:head>
  <title>Mohamad Ojail - portfolio</title>
</svelte:head>

{#if $modalStatus.on === true}
  <Modal />
{/if}

<Nav />
<slot />
