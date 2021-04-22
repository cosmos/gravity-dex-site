<template>
  <main>
    <section-hero class="z-text" />

    <div class="tm-section tm-wrapper tm-container">
      <div class="section-about tm-grid-base z-text">
        <div class="left">
          <div
            class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
          >
            What is it?
          </div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title mt-5">
            The Most Advanced Interchain DEX
          </h1>
          <p class="subtitle tm-rf1 tm-lh-copy mt-7 tm-measure">
            Gravity uses the Inter-Blockchain Communication (IBC) protocol to
            enable swaps and pools of digital assets between any two blockchains
            within the Cosmos ecosystem or beyond. Gravity also achieves
            superior efficiency compared to other AMMs due to its groundbreaking
            Equivalent Swap Price Model.
          </p>
        </div>
      </div>
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="section-competition tm-grid-base">
        <div class="left graphics">
          <graphics-sun-coin class="graphics__item sun" />
        </div>
        <div class="right">
          <div
            class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
          >
            Testnet competition
          </div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title mt-5">
            Let the best<br />traders win
          </h1>
          <p class="subtitle tm-rf1 tm-lh-copy mt-7 tm-measure">
            Participants compete for the top score, which is based on a
            combination of their activity and profits. The top ⅓ will receive
            prizes proportional to their leaderboard position. Participants must
            execute deposits, withdrawals, and swaps across at least 3 pools to
            be eligible.
          </p>
        </div>
        <div class="footer mt-10">
          <section-date />
        </div>
      </div>
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="section-prize tm-grid-base">
        <div class="left">
          <div
            class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
          >
            Prize pool
          </div>
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-title mt-5">
            $200,000<br />At Stake
          </h1>
          <p class="subtitle tm-rf1 tm-lh-copy mt-7 tm-measure">
            The Gravity DEX testnet competition prize pool totalling more than
            $200,000 in ATOM and 10 sponsored tokens from the Cosmos ecosystem.
          </p>
        </div>
        <div class="right">
          <div class="card">
            <div class="card-inner">
              <div class="card-graphics">
                <graphics-coin-stack class="coin-stack" />
              </div>
              <div class="text">
                <div
                  class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
                >
                  Main prize
                </div>
                <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title mt-5">
                  $5,000
                  <span class="unit tm-rf1 tm-bold tm-lh-title tm-title"
                    >USD</span
                  >
                </h1>
                <p class="subtitle tm-rf1 tm-lh-copy tm-measure">in ATOM</p>
              </div>
            </div>
            <!-- <div
              class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted mt-8"
            >
              Prize pool
            </div>
            <div class="mt-5 z-text">
              <tm-link
                href="http://gravitydex.io"
                class="tm-link-external tm-rf2 tm-bold tm-lh-title"
              >
                Bug bounties
              </tm-link>
            </div> -->
          </div>
        </div>
      </div>
      <div class="mt-10">
        <section-sponsored-coins />
      </div>
    </div>

    <div class="section-register tm-section tm-wrapper tm-container">
      <div class="register-graphics">
        <graphics-register-hero class="graphics__item register" />
      </div>
      <div class="tm-wrapper center text-center">
        <div
          class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
        >
          Register now
        </div>
        <h1 class="title tm-rf6 tm-bold tm-lh-title tm-title mt-5">
          Join the Future of DeFi with {{ totalCount }} users
        </h1>
        <p class="subtitle tm-rf1 tm-lh-copy mt-7 tm-measure">
          Register by April 30 in order to participate in the Gravity DEX
          testnet competition.
        </p>
      </div>
      <section-countdown class="center mt-9" />
      <div class="center mt-9">
        <tm-button
          to-link="external"
          :href="formURL"
          background-color="var(--white)"
          color="var(--black)"
          size="l"
          >Register</tm-button
        >
        <p class="subtitle tm-rf-1 tm-lh-title mt-7">
          Registration ends April 30.
        </p>
      </div>
      <!-- <div class="mt-10">
        <section-cta />
      </div> -->
    </div>

    <!-- <div class="tm-section tm-container">
      <div class="tm-wrapper center">
        <div
          class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
        >
          Faq
        </div>
        <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title mt-5">
          Frequently asked questions
        </h1>
      </div>
      <section-questions class="mt-10" />
    </div> -->
  </main>
</template>

<script>
import axios from 'axios'
import { FORM_URL } from '~/common/constants'

export default {
  async asyncData() {
    const data = (
      await axios.get(`https://backend.tendermint.com/dex-registration`)
    ).data
    return { data }
  },
  computed: {
    formURL() {
      return FORM_URL
    },
    totalCount() {
      return this.data.registration_count
    },
  },
}
</script>

<style lang="stylus" scoped>
// Global
.subtitle
  color var(--white-800)
  position relative
  z-index 50

// Graphics
.graphics
  position relative
  width 100%
  z-index -1

.graphics__item
  position absolute
  height auto
  z-index -1

.sun
  bottom 0
  left -18%
  width 365%
  margin-bottom -135%
  margin-left -165%
  max-width 144rem
  min-width 40rem

.register
  bottom 0
  left auto
  right -98%
  width 150%
  margin-bottom -96%
  margin-left -135%
  max-width 144rem
  min-width 40rem
  z-index -1

// About
.section-about
  .left
    grid-column 1/-1

.section-about
  margin-bottom var(--spacing-11)
  margin-top 15rem
  position relative

// Competition
.section-competition
  .left
  .right
  .footer
    grid-column 1/-1
    z-index 50

// Prize
.section-prize
  .left
  .right
    grid-column 1/-1

.section-prize .right
  margin-top var(--spacing-9)

// Register
.section-register
  position relative
  z-index 50

.register-graphics
  position relative
  padding-top var(--spacing-12)
  overflow visible
  z-index -1

.card
  display flex
  flex-direction column

  &-inner
    display flex
    flex-direction row
    align-items center
    justify-content space-between
    padding var(--spacing-7)
    background var(--fg)
    border-radius $border-radius-6

@media $breakpoint-xsmall-only
  .graphics
    margin-top 80%
    margin-left 60%

  .graphics__item
    left 170%

  .section-about
    margin-top 0

  .card-inner
    flex-direction column
    align-items flex-start

  .sun
    bottom 0
    left -18%
    width 305%
    margin-bottom -105%
    margin-left -165%
    max-width 144rem
    min-width 40rem

@media $breakpoint-small
  .section-competition
    padding-top 36rem

@media $breakpoint-medium
  .section-prize .right
    grid-column span 6

  .section-about
    margin-top 19rem

@media $breakpoint-large
  .section-about
    margin-top -3rem

  .section-competition
    padding-top 36rem

  .sun
    margin-bottom -95%
    margin-left -115%

@media $breakpoint-xl
  .section-about
    margin-top -33rem
    .left
      grid-column 2/span 7

  .section-competition
    padding-top 0
    .left
      grid-column 1/span 4
    .right
      grid-column 6/span 7
    .footer
      grid-column 4/span 9

  .section-prize
    .left
      grid-column 2/span 5
    .right
      grid-column 7/span 6
</style>
