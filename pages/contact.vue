<template>
  <div class="container">
    <h1 class="title">Contact</h1>
    <div class="content">
      <form
        name="contact"
        action="/thanks"
        netlify-honeypot="bot-field"
        method="post"
        netlify
      >
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <label class="form-label" for="name"> Name: </label>
        <input id="name" class="form-field" name="name" />
        <label class="form-label" for="email"> Email: </label>
        <input id="email" class="form-field" name="email" />
        <label class="form-label" for="message"> Message: </label>
        <textarea id="message" class="form-field" name="message"></textarea>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped></style>
