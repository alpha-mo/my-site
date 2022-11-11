<script>
  import MobileMenuStatus from "$stores/mobileMenuStore";
  const width = 35;
  const height = 24;
  const viewBox = `0 0 ${width} ${height}`;
  const rectHeight = 2;
  $: open = $MobileMenuStatus;
  const onClick = () => {
    open = !open;
    MobileMenuStatus.set(open);
  };
  let winWidth;
  $: if (winWidth > 570) {
    open = false;
  }
</script>

<svelte:window bind:innerWidth={winWidth} />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg class:open {width} {height} {viewBox} on:click={onClick}>
  <rect class="top" y="0" {width} height={rectHeight} fill="#b2bfcd" />
  <rect class="middle" y="11" {width} height={rectHeight} fill="#b2bfcd" />
  <rect class="bottom" y="22" {width} height={rectHeight} fill="#b2bfcd" />
</svg>

<style>
  .top,
  .middle,
  .bottom {
    transition: all 250ms ease;
  }
  .open .top {
    transform: translateX(35px);
  }
  .open .bottom {
    transform: translateX(-35px);
  }
  .open .middle {
    fill: var(--orange);
    width: 25px;
    transform: translateX(5px) translateY(-2px);
    height: 7px;
  }
  svg {
    cursor: pointer;
  }

  @media (min-width: 571px) {
    svg {
      display: none;
    }
  }
</style>
