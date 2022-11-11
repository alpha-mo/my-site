<script>
  import { fly } from "svelte/transition";
</script>

<div
  class="container"
  in:fly={{ y: 100, duration: 150, delay: 300, opacity: 0 }}
  out:fly={{ y: 100, duration: 150, opacity: 0, delay: 150 }}
>
  <p>
    <span class="morph c-orange">Mo!</span>
    a family man with 4 kids and a lovely partner, a nature loving person, ambitious,
    and a quick learner!
  </p>
  <h3>Coming to Sweden</h3>
  <p>
    Escaping the war in Syria and coming to Sweden was a complex process that I
    had to go through. I had to face many challenges in order for me to adopt to
    the new life I was put up to.
  </p>
  <p>
    Being able to speak <span class="c-yellow-light">English</span> helped me a
    lot to learn
    <span class="c-yellow-light">Swedish</span> fast and start focusing on building
    a career as a developer.
  </p>
  <p>
    Currently studing a full-stack course with <span
      ><a
        href="https://ya.se/yrkeshogskola/systemutvecklare-java/"
        target="_blank"
        rel="noopener noreferrer"
        >YrkesAkademin<span class="arrow">&#187</span></a
      ></span
    >
  </p>
  <p>
    Knowing that the field requires an astonishing amount competence I had to
    teach myself many other technologies in addition to my current studies.
  </p>
  <p>
    Find out what I'm currently studying <span
      ><a href="/own">On My Own.</a></span
    ><br />
    <span>YrkesAkademin's <a href="/yrkes">Course details.</a></span>
  </p>
</div>

<style>
  .container {
    width: fit-content;
    padding: 100px 40px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin-top: 20px;
  }
  p {
    max-width: 50pc;
    margin-top: 20px;
  }
  .arrow {
    font-size: 16px;
    transform: rotate(-45deg) translateX(10px);
    display: inline-block;
  }
  .morph {
    font-size: 28px;
    transform: rotate(-15deg);
    display: inline-block;
  }
</style>
