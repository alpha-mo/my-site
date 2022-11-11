<script>
  import "$styles/lanBarColors.css";
  import { getClassName, getPercentage } from "$utils/github/langBarUtils";
  export let langs = [{ lang: "other", value: 1 }];
  let total = 0;
  langs.forEach((l) => {
    total = total + l.value;
  });
  const getWidth = (lang) => {
    const pecentage = getPercentage(total, lang.value);
    return `width: ${pecentage}%;`;
  };
</script>

<div class="container">
  <div class="bar">
    {#each langs as lang}
      <div class={getClassName(lang.lang)} style={getWidth(lang)} />
    {/each}
  </div>

  <div class="names">
    {#each langs as lang}
      <p class={getClassName(lang.lang)}>{lang.lang}</p>
    {/each}
  </div>
</div>

<style>
  .container {
    width: 100%;
  }
  .bar {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    overflow: hidden;
  }
  .names {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20px;
    gap: 10px;
  }
  .names p {
    font-size: 14px;
    background: none;
  }
  .bar div {
    height: 10px;
  }
</style>
