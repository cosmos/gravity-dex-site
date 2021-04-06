<template>
  <main>
    <section-primary-nav />

    <img src="~/assets/images/bg/blob.png" class="blob" />
    <img src="~/assets/images/bg/star.png" class="star" />
    <img src="~/assets/images/bg/glow.png" class="glow" />
    <graphics-fg class="graphics" />

    <!-- <img src="~/assets/images/bg/background.png" class="bg" /> -->

    <div class="section-hero">
      <div class="tm-section tm-container tm-wrapper tm-grid-base">
        <h1 class="title tm-rf6 tm-bold tm-lh-title tm-title">
          Gravity DEX incentivized testnet.
        </h1>
        <div class="split tm-grid-base">
          <div class="left">
            <p class="tm-rf0 tm-lh-copy">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Curabitur blandit tempus porttitor. Integer posuere erat a
              ante venenatis dapibus posuere velit aliquet. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam.
            </p>
          </div>
          <div v-if="toTimezone(endDate, endTime) >= moment()" class="right">
            <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
              Registration in
            </div>
            <div class="time tm-rf2 tm-bold tm-lh-copy tm-code">
              <tm-countdown
                :now="currentTime"
                :end="countdownTimer(endDate, endTime)"
              />
            </div>
            <div class="date tm-rf0 tm-medium tm-lh-title tm-overline">
              April 20
            </div>
          </div>
        </div>
        <div class="btn-group">
          <tm-button
            to-link="external"
            href="https://github.com/tendermint/liquidity#liquidity-module"
            size="l"
            variant="text"
            class="btn"
            >Learn more<span class="icon__right">&rarr;</span></tm-button
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import moment from 'moment-timezone'

export default {
  data() {
    return {
      moment,
    }
  },
  computed: {
    currentTime() {
      return this.$store.state.countdown.now
    },
    endDate() {
      return this.$store.state.countdown.date
    },
    endTime() {
      return this.$store.state.countdown.time
    },
  },
  mounted() {
    window.setInterval(() => {
      this.$store.commit('updateNow')
    }, 1000)
  },
  methods: {
    countdownTimer(date, time) {
      return moment.tz(`${date} ${time}`, 'UTC').format()
    },
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
img
  filter blur(5px)

// Hero
.section-hero
  position relative
  z-index 200

.title
.split
.left
.right
.btn-group
  grid-column 1/-1

.split
  margin-top var(--spacing-8)

.right
  grid-row 1
  margin-top 0

.left
  grid-row 2
  margin-top var(--spacing-7)

.date
  color var(--white-500)

.btn-group
  margin-top var(--spacing-6)

.blob
  position absolute
  top 0
  left 10%
  height 50%
  width 100%
  z-index 4

.star
  position absolute
  top 0
  left 10%
  height 100%
  width 100%
  z-index 4

.glow
  position absolute
  top 0
  left 10%
  height 100%
  width 100%
  z-index 3

.bg
  position absolute
  top 0
  left 0
  height 100%
  width 100%
  z-index 3

.graphics
  position absolute
  top -30%
  right -30rem
  z-index 4

@media $breakpoint-xsmall-only
  .star
    display none

  .graphics
    right revert

// @media $breakpoint-small
//   .graphics
//     right revert

// @media $breakpoint-medium
//   .graphics
//     display none

@media $breakpoint-xl
  .title
    grid-column 1/span 9

  .left
  .right
    margin-top 0
    grid-row 2

  .left
    grid-column 1/span 5

  .right
    grid-column 6/span 6
</style>
