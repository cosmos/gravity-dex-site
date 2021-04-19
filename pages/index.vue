<template>
  <main>
    <!-- <div class="layer">
      <img src="~/assets/images/bg/blob.png" class="blob" />
      <img src="~/assets/images/bg/star.png" class="star" />
      <img src="~/assets/images/bg/glow.png" class="glow" />

      <div class="graphics">
        <graphics-hero class="graphics__item" />
      </div>
    </div> -->

    <section-hero />

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
            $200,000 in ATOMs and 10 sponsored tokens from the Cosmos ecosystem.
          </p>
        </div>
        <div class="right">
          <div class="card">
            <div class="card-inner">
              <div class="graphics">
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
            <div
              class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted mt-8"
            >
              Prize pool
            </div>
            <p class="subtitle tm-rf1 tm-lh-copy mt-7 tm-measure">
              <!-- TODO -->
              <tm-link href="http://gravitydex.io">
                Bug bounties &#8599;
              </tm-link>
            </p>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <section-sponsored-coins />
      </div>
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <div class="tm-wrapper center text-center">
        <div
          class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
        >
          Register now
        </div>
        <h1 class="title tm-rf6 tm-bold tm-lh-title tm-title mt-5">
          Join the<br />Future of DeFi
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
      <div class="mt-10">
        <section-cta />
      </div>
    </div>

    <div class="tm-section tm-container">
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
    </div>
  </main>
</template>

<script>
import { FORM_URL } from '~/common/constants'

export default {
  computed: {
    formURL() {
      return FORM_URL
    },
  },
}
</script>

<style lang="stylus" scoped>
// .layer
//   display flex
//   align-items center
//   justify-content center
//   position absolute
//   top 0
//   left 0
//   right 0
//   bottom 0
//   overflow hidden
//   min-height 79rem

// .blob
//   position absolute
//   top 0
//   left 10%
//   width 100%
//   z-index 4

// .star
//   position absolute
//   top 0
//   left 10%
//   height 100%
//   width 100%
//   z-index 4

// .glow
//   position absolute
//   top 0
//   left 10%
//   height 100%
//   width 100%
//   z-index 3

// .graphics
//   position relative

//   &__item
//     position absolute
//     top -47rem
//     right -83rem
//     height 78rem
//     max-height 90rem
//     z-index 4

.overline
  color var(--white-500)

.subtitle
  color var(--white-800)

.section-prize
  .left
  .right
    grid-column 1/-1

.section-prize .right
  margin-top var(--spacing-9)

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

.graphics
  position relative
  // margin-top -10%
  // margin-left -15%

// .card__graphics
//   position relative
//   width 100%
//   max-width 22rem

// @media $breakpoint-xsmall-only
//   .star
//     display none

//   .graphics__item
//     top -44rem
//     right -62rem
//     max-height 55rem

// @media $breakpoint-small-only
//   .graphics__item
//     top -67rem
//     right -67rem
//     max-height 80rem

// @media $breakpoint-small
//   .star
//     display none

// @media $breakpoint-medium-only
//   .graphics__item
//     top -67rem
//     right -67rem
//     max-height 80rem

@media $breakpoint-xl
  // .layer
  //   min-height 70rem

  // .star
  //   display unset

  .section-prize
    .left
      grid-column 2/span 5
    .right
      grid-column 7/span 5

  .section-prize .right
    margin-top 0
</style>
