<template>
  <div>
    <span @click="openMenu">
      <tm-button size="l" variant="contained" class="btn">{{
        btnText
      }}</tm-button>
    </span>
    <tm-drawer ref="Drawer">
      <div class="drawer-container">
        <!-- Close drawer -->
        <div class="close-container mb-7">
          <span class="cursor-pointer" @click="closeMenu">
            <icon-close />
          </span>
        </div>
        <!-- STEP 0 -->
        <div
          v-show="step === 0"
          ref="step0"
          key="step0"
          class="drawer-item text-left"
        >
          <h1>Registration</h1>
          <p class="tm-rf0 tm-lh-copy">
            Thanks for taking part in the testnet. In order to register you
            must:
          </p>
          <tm-divider class="mt-7 mb-7" />
          <p class="tm-rf0 tm-lh-copy tm-muted">
            Sponsor prize will be distributed to each winner’s address in each
            network created by the same mnemonic (private key) used for Cosmos
            Hub mainnet address for Atom prize distribution. So, please keep
            your mnemonic (private key) safe!
          </p>
          <div class="mt-7" @click="actionGoForwards">
            <tm-button variant="contained" class="btn">Start</tm-button>
          </div>
        </div>
        <!-- STEP 1 -->
        <div
          v-show="step === 1"
          ref="step1"
          key="step1"
          class="drawer-item text-left"
        >
          <h1>Registration</h1>
          <span class="tm-code"
            >{{ `0${step}` }} /
            <span class="tm-muted">{{ `0${totalStep}` }}</span></span
          >
          <p class="tm-rf0 tm-lh-copy mt-6">
            Introducing yourself is the first step, your twitter account should
            have all the information we need.
          </p>
          <div class="mt-7" @click="actionGoForwards">
            <tm-button variant="contained" class="btn" size="s"
              >Sign in with Twitter<span class="icon__right"
                >&#8599;</span
              ></tm-button
            >
          </div>
        </div>
        <!-- STEP 2 -->
        <div
          v-show="step === 2"
          ref="step2"
          key="step2"
          class="drawer-item text-left"
        >
          <h1>Registration</h1>
          <span class="tm-code"
            >{{ `0${step}` }} /
            <span class="tm-muted">{{ `0${totalStep}` }}</span></span
          >
          <p class="tm-rf0 tm-lh-copy mt-6">
            Please make sure the information below is accurate and up to date.
          </p>
          <!-- <tm-divider class="mt-7 mb-7" /> -->
          <label for="name" class="tm-rf-1 tm-lh-copy mt-6">Name</label>
          <input
            id="name"
            v-model="registration.name"
            name="name"
            placeholder="Name"
            required
          />

          <label for="email" class="tm-rf-1 tm-lh-copy mt-5"
            >Email address</label
          >
          <input
            id="email"
            v-model="registration.email"
            name="email"
            type="email"
            placeholder="Email address"
            required="required"
          />
          <div class="btn-group mt-10">
            <span class="btn" @click="actionGoBackwards">
              <tm-button variant="text" size="s">Back &#8592;</tm-button>
            </span>
            <span class="btn" @click="actionGoForwards">
              <tm-button variant="contained" size="s" :disabled="emailInvalid"
                >Next -></tm-button
              >
            </span>
          </div>
        </div>
        <!-- STEP 3 -->
        <div
          v-show="step === 3"
          ref="step3"
          key="step3"
          class="drawer-item text-left"
        >
          <h1>Registration</h1>
          <span class="tm-code"
            >{{ `0${step}` }} /
            <span class="tm-muted">{{ `0${totalStep}` }}</span></span
          >
          <p class="tm-rf0 tm-lh-copy mt-6">
            Please make sure the information below is accurate and up to date.
          </p>
          <tm-divider class="mt-7 mb-7" />
          <div class="btn-group mt-10">
            <span class="btn" @click="actionGoBackwards">
              <tm-button variant="text" size="s">Back &#8592;</tm-button>
            </span>
            <span class="btn" @click="actionGoForwards">
              <tm-button variant="contained" size="s">Next -></tm-button>
            </span>
          </div>
        </div>
      </div>
    </tm-drawer>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * 'left' | 'right'
     */
    btnText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      state: 'default',
      step: 0,
      totalStep: 5,
      registration: {
        email: null,
        name: null,
      },
    }
  },
  computed: {
    // nameInvalid() {
    //   if (this.name.length > 3) {
    //     // eslint-disable-next-line no-extra-boolean-cast
    //     return !Boolean(this.name)
    //   }
    // },
    emailInvalid() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !re.test(String(this.email))
    },
  },
  methods: {
    openMenu() {
      if (this.$refs.Drawer.active) {
        this.$refs.Drawer.close()
      } else {
        this.$refs.Drawer.open()
      }
    },
    closeMenu() {
      this.$refs.Drawer.close()
    },
    actionGoForwards() {
      this.step += 1
    },
    actionGoBackwards() {
      this.step -= 1
    },
  },
}
</script>

<style lang="stylus" scoped>
.cursor-pointer
  cursor pointer

.drawer-container
  padding var(--spacing-7)

.drawer-item
  display flex
  flex-direction column
  justify-content flex-start
  text-align start

.close-container
  display flex
  justify-content flex-end

.btn-group
  position relative
  display flex
  flex-direction row
  gap 0 var(--grid-gap-x)

input
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

@media $breakpoint-xsmall-only
  .btn-group
    display block
</style>
