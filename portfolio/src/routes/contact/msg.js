export const confirmHtml = (name, message) => {
    return `<div class="wrapper">
    <h2>Hello ${name}</h2>
    <p>I have received your message and will get back to you as soon as possible.</p>
    <h3>M. Ojail</h3>
    <br>
    <p>Your message:</p>
    <p class="msg">${message}</p>
</div>

<style>
    .wrapper,
    .msg {
        width: fit-content;
        padding: 20px;
        background: #ededed;
        border: 2px solid #373737;
        border-radius: 3px;

    }

    h2 {
        font-size: 20px;
    }

    p,
    h3 {
        font-size: 18px;
    }
</style>`
}

export const incomingHtml = (name, message) => {
    return `<div class="wrapper">
    <h2>Message received from ${name}</h2>
    <p class="msg">${message}</p>
</div>

<style>
    .wrapper,
    .msg {
        width: fit-content;
        padding: 20px;
        background: #ededed;
        border: 2px solid #373737;
        border-radius: 3px;

    }

    h2 {
        font-size: 20px;
    }
</style>`
}