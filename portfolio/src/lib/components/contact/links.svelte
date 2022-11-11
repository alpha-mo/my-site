<div class="container">
  <p>find me on:</p>
  <div class="icons">
    <a
      href="https://github.com/alpha-mo"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg>
        <use href="icons/github.svg#github" />
      </svg>
    </a>

    <a
      href="https://se.linkedin.com/in/ojail"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg>
        <use href="icons/linkedin.svg#linkedin" />
      </svg>
    </a>
  </div>
</div>

<style>
  .container {
    width: fit-content;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .icons {
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: var(--white-dim);
    transition: all 100ms ease;
    opacity: 0.4;
  }
  a:hover svg {
    transform: scale(1.2);
    opacity: 1;
  }
  p {
    font-size: 16px;
  }
</style>
