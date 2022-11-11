<script>
  import LangBar from "./langBar.svelte";
  export let repo;
</script>

<div class="card">
  <div class="top">
    {#each repo.topics as topic}
      <p>{topic}</p>
    {/each}
  </div>
  <div class="body">
    <h3>{repo.name}</h3>
    <p>{repo.desc}</p>
  </div>
  <div class="bottom">
    <a href={repo.url} target="_blank" rel="noopener noreferrer">
      <svg>
        <use href="icons/git-branch.svg#git-branch" />
      </svg>
      <svg>
        <use href="icons/external-link.svg#external-link" class="ext-link" />
      </svg>
    </a>
    <LangBar langs={repo.languages} />
  </div>
</div>

<style>
  .card {
    width: 350px;
    min-width: 340px;
    height: 350px;
    background: var(--card-background);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card:hover {
    transform: translateY(-10px) scale(1.08);
    background: var(--card-hover);
  }
  .top,
  .bottom {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    flex-direction: row;
  }
  .bottom {
    flex-direction: row;
    justify-content: space-between;
  }
  .top {
    gap: 10px;
  }
  .top p {
    font-size: 14px;
    color: var(--white-yellowish);
  }
  .body {
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: first baseline;
    align-items: flex-start;
    gap: 15px;
  }
  .body h3 {
    font-size: 20px;
  }
  .body p {
    font-size: 16px;
  }
  svg {
    width: 24px;
    height: 24px;
    fill: var(--yellow-light);
    transition: all 100ms ease-in;
  }
  .ext-link {
    fill: none;
    stroke: var(--yellow-light);
    stroke-width: 1.45px;
    transform: scale(0.8);
  }
  a:hover svg {
    transform: scale(1.1) translateY(-5px);
  }
  a {
    min-width: fit-content;
  }
</style>
