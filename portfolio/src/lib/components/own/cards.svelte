<script>
  import data from "$data/about/own-items.json";
</script>

<div class="container">
  {#each data as item}
    <div class="card">
      <h3>{item.title}</h3>
      <ul>
        {#each item.details as detail}
          <li>
            <svg>
              <use href={detail.ico} />
            </svg>
            <p>{detail.text}</p>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style>
  svg {
    width: 22px;
    height: 22px;
  }
  li {
    display: inline-flex;
    gap: 5px;
  }
  ul {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  h3,
  p {
    font-size: 18px;
  }

  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    gap: 20px;
  }
  .card {
    background: var(--card-background);
    padding: 25px;
    width: 250px;
    height: 300px;
  }
</style>
