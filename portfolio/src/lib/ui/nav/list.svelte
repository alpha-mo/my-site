<div>
  <a href="/about">About me</a>
  <a href="/github">Latest on Github</a>
  <a href="/contact">Contact Me</a>
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    gap: 35px;
  }
  a {
    font-size: 18px;
    color: var(--white-yellowish);
    position: relative;
  }
  a:hover {
    color: var(--yellow);
  }
  a::before {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    width: 0;
    height: 2px;
    background: var(--cyan);
    transition: all 250ms ease;
  }
  a:hover::before {
    width: 100%;
  }

  @media (max-width: 570px) {
    div {
      display: none;
    }
  }
</style>
