<script>
  import { fly } from "svelte/transition";
  import Other from "$components/contact/links.svelte";
  import modalStatus from "$stores/modalStore";
  export let form;
  import { isOk } from "$utils/contact/contactFormUtils";
  import { enhance } from "$app/forms";
  let nameValue = form?.name ?? "";
  let emailValue = form?.email ?? "";
  let messageValue = form?.message ?? "";
  let nameSetErr = form?.nameErr;
  let emailSetErr = form?.emailErr;
  let messageSetErr = form?.messageErr;
  const onchange = (selector) => {
    if (selector === 0) nameSetErr = !isOk(nameValue, false);
    if (selector === 1) emailSetErr = !isOk(emailValue, true);
    if (selector === 2) messageSetErr = !isOk(messageValue, false);
  };
</script>

<div
  in:fly={{ y: 100, duration: 150, delay: 300, opacity: 0 }}
  out:fly={{ y: 100, duration: 150, opacity: 0, delay: 150 }}
>
  <p style="text-align: center;">Contact Form is temperarly disabled.</p>
  <form
    method="POST"
    use:enhance={({ form }) => {
      modalStatus.setOn();
      return async ({ result, update }) => {
        if (result.data.success) {
          form.reset();
          update();
          modalStatus.setOff();
        }
        modalStatus.setOffNoMsg();
      };
    }}
  >
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Your name *"
      bind:value={nameValue}
      class:err={nameSetErr}
      on:blur={() => {
        onchange(0);
      }}
    />
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Your e-mail *"
      bind:value={emailValue}
      class:err={emailSetErr}
      on:blur={() => {
        onchange(1);
      }}
    />
    <textarea
      name="message"
      id="message"
      placeholder="Your message *"
      bind:value={messageValue}
      class:err={messageSetErr}
      on:blur={() => {
        onchange(2);
      }}
    />
    <button disabled>Send</button>
  </form>

  <Other />
</div>

<style>
  form {
    display: flex;
    width: 400px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px auto;
    gap: 25px;
    opacity: 0.2;
  }
  input,
  textarea {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    border-width: 0 0 2px;
    border-color: var(--yellow-light);
    outline: none;
    background: none;
    color: var(--white-dim);
    font-size: 20px;
    padding: 5px;
    transition: all 250ms ease;
  }
  input:focus,
  input:hover,
  textarea:focus,
  textarea:hover {
    border-color: var(--cyan);
    color: var(--white);
    padding: 10px;
  }
  button {
    width: 100%;
    font-size: 22px;
    background: none;
    outline: none;
    border: 1px solid var(--yellow);
    color: var(--yellow);
    padding: 5px;
    cursor: pointer;
  }
  /* button:hover {
    background: var(--yellow-tint);
    border: 1px solid var(--yellow);
    color: var(--background);
    padding: 5px;
    cursor: pointer;
  } */
  .err {
    border-color: var(--red);
  }
  @media (max-width: 440px) {
    form {
      width: 290px;
    }
    input,
    textarea {
      font-size: 16px;
    }
    button {
      font-size: 16px;
    }
  }
  @media (max-width: 320px) {
    form {
      width: 240px;
    }
    input,
    textarea {
      font-size: 14px;
    }
    button {
      font-size: 14px;
    }
  }
</style>
