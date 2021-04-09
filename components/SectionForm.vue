<template>
  <div class="section-form">
    <div class="section-container bottom">
      <div class="container">
        <transition name="fade" mode="out-in">
          <!-- SUCCESS -->
          <div
            v-if="state === 'success'"
            key="success"
            class="bottom__state tm-rf0 tm-lh-copy"
          >
            <div class="bottom__get-notified tm-rf0 tm-lh-copy tm-bold">
              You should receive a confirmation email.
            </div>
            <div class="bottom__get-notified">
              Open it up and click ‘Confirm your email’ so we can keep you
              updated.
            </div>
            <p class="bottom__state__success">
              Don’t see the confirmation email yet? <br />
              It might be in your spam folder. If so, make sure to mark it as
              “not spam”.
            </p>
          </div>
          <!-- ERROR -->
          <div
            v-else-if="state === 'error'"
            key="error"
            class="bottom__state tm-rf0 tm-lh-copy"
          >
            <div class="bottom__get-notified">Something went wrong</div>
            <div class="bottom__state__error">
              Uh oh! Refresh the page and try again.
            </div>
          </div>
          <!-- DEFAULT -->
          <div v-else key="default">
            <label
              class="bottom__get-notified tm-rf0 tm-lh-copy tm-bold"
              for="field-email"
            >
              Sign up to be notified about Gravity DEX news and Cosmos updates
            </label>
            <form
              :action="url"
              method="POST"
              target="_blank"
              rel="noreferrer noopener"
              class="bottom__form"
              @submit.prevent="actionSubmitEmail"
            >
              <div class="bottom__form__input">
                <input
                  id="field-email"
                  v-model="email"
                  name="fields[email]"
                  class="bottom__form__input__input tm-rf0 tm-lh-copy"
                  type="email"
                  placeholder="Email address"
                  required="required"
                />
                <tm-button
                  variant="contained"
                  background-color="#890FA8"
                  color="var(--title)"
                  class="btn"
                  :disabled="emailInvalid"
                  @click="actionSubmitEmail"
                  >Sign up<span class="icon__right">&#8594;</span></tm-button
                >
              </div>
            </form>
            <p class="bottom__footnote tm-measure tm-rf-1 tm-lh-copy">
              You can unsubscribe at any time.
              <a href="https://cosmos.network/privacy"
                >Privacy policy<span class="icon__right">&#8599;</span></a
              >
            </p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import querystring from 'querystring'

export default {
  data() {
    return {
      email: null,
      state: 'default',
      url: 'https://app.mailerlite.com/webforms/submit/r6l5z8',
      formData: {
        callback: 'jQuery18306433350137233467_1617924323730',
        'ml-submit': '1',
        anticsrf: 'anticsrf',
        ajax: '1',
        guid: '6ca22b31-4124-e926-cf4f-272ff9f44ec3',
        _: '1617924327784',
      },
    }
  },
  computed: {
    emailInvalid() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !re.test(String(this.email))
    },
  },
  methods: {
    actionSubmitEmail() {
      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
          'fields[email]': this.email,
          ...this.formData,
        }),
      }
      fetch(this.url, options)
        .then(() => {
          this.state = 'success'
        })
        .catch(() => {
          this.state = 'error'
        })
    },
  },
}
</script>

<style lang="stylus" scoped>
// Global
.icon__right
  margin-left 0.25em

// Transition
.fade-enter-active
  transition all .4s ease-out

.fade-leave-active
  transition all .2s ease-out

.fade-enter
  opacity 0
  transform translateY(1rem)

.fade-enter-to
  opacity 1
  transform translateY(0)

.fade-leave
  opacity 1
  transform scale(1)

.fade-leave-to
  opacity 0
  transform scale(.96)

// Form
.bottom
  .container
    display flex
  &__get-notified
    display block
    color var(--white)
    margin-bottom var(--spacing-3)
  &__form
    margin-top var(--spacing-5)
    margin-bottom var(--spacing-5)
  &__state
    &__success
      color var(--gray-600)
    &__error
      color #FF4C52
  &__form
    max-width: $max-width['7']
    width 100%
    &__input
      display block
      &__input
        outline none
        width 100%
        height auto
        background var(--white-100)
        border none
        border-radius $border-radius-3
        padding var(--spacing-4) var(--spacing-5)
        color var(--white)
        transition color 0.15s ease-out, background 0.15s ease-out
        &::placeholder
          color var(--gray-600)
          transition color 0.15s ease-out
        &:hover
          background var(--white-200)
          &:not(:focus)::placeholder
            color var(--gray-800)
        &:focus
          background var(--white-200)
  &__footnote
    color var(--white-500)

.btn
  margin-top var(--spacing-3)
  width 100%

@media $breakpoint-small
  .bottom__form__input
    align-items center
    display grid
    grid-auto-flow column
    grid-template-columns 1fr min-content
    gap var(--spacing-3)

  .btn
    margin-top 0
</style>
