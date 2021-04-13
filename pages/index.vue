<template>
  <main>
    <div class="layer">
      <img src="~/assets/images/bg/blob.png" class="blob" />
      <img src="~/assets/images/bg/star.png" class="star" />
      <img src="~/assets/images/bg/glow.png" class="glow" />

      <div class="graphics">
        <graphics-hero class="graphics__item" />
      </div>
    </div>

    <div class="section-hero">
      <div class="tm-container tm-wrapper tm-grid-base">
        <h1 class="title tm-rf6 tm-bold tm-lh-title tm-title">
          Bringing DeFi<br />
          to Cosmos
        </h1>
        <div class="top">
          <p class="intro tm-rf0 tm-lh-copy">
            The Gravity DEX testnet competition starts soon with a ~$200,000
            prize pool in ATOM and 10 other Cosmos tokens.
          </p>
          <div class="btn-group">
            <tm-button
              to-link="external"
              href="https://medium.com/tendermint/gravity-dex-testnet-competition-mainnet-launch-on-cosmos-imminent-b95ef5329d06"
              size="l"
              variant="text"
              class="btn"
              >Learn more<span class="icon__right">&#8599;</span></tm-button
            >
          </div>
        </div>
        <div class="split tm-grid-base">
          <div v-if="toTimezone(endDate, endTime) >= moment()" class="left">
            <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
              Registration in
            </div>
            <tm-countdown
              :now="currentTime"
              :end="countdownTimer(endDate, endTime)"
              class="time tm-rf3 tm-bold tm-lh-copy tm-code"
            />
            <div class="date tm-rf0 tm-medium tm-lh-title tm-overline">
              April 21
            </div>
          </div>
          <div class="right">
            <section-form />
          </div>
        </div>
        <div class="footer">
          <div class="overline tm-rf-1 tm-medium tm-lh-title tm-overline">
            Sponsored coins
          </div>
          <div class="logos-list">
            <img src="~static/logos/terra-money.svg" alt="Terra Money logo" />
            <img
              src="~static/logos/regen-network.svg"
              alt="Regen Network logo"
            />
            <img src="~static/logos/bitsong.svg" alt="Bitsong logo" />
            <img src="~static/logos/sentinel.svg" alt="Sentinel logo" />
            <img src="~static/logos/persistence.svg" alt="Persistence logo" />
            <img src="~static/logos/akash.svg" alt="Akash logo" />
            <img src="~static/logos/e-money.svg" alt="E money logo" />
            <img src="~static/logos/irisnet.svg" alt="Irisnet logo" />
            <img src="~static/logos/agoric.svg" alt="Agoric logo" />
            <img src="~static/logos/cosmos-hub.svg" alt="Cosmos Hub logo" />
          </div>
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
// Graphics
.layer
  display flex
  align-items center
  justify-content center
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  overflow hidden
  min-height 79rem

.blob
  position absolute
  top 0
  left 10%
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

.graphics
  position relative

  &__item
    position absolute
    top -47rem
    right -83rem
    height 78rem
    max-height 90rem
    z-index 4

// Hero
.section-hero
  position relative
  z-index 200
  margin-top var(--spacing-8)

.title
.top
.split
.left
.right
.footer
  grid-column 1/-1

.top
  margin-top var(--spacing-6)

.split
  margin-top 0

.left
  grid-row 1
  margin-top var(--spacing-7)
  padding-bottom var(--spacing-7)
  border-bottom 1px solid var(--white-100)

.right
  grid-row 2
  margin-top var(--spacing-7)

.intro
  max-width 30em
  color var(--white-500)
  font-feature-settings 'liga' on, 'calt' on, 'zero' on // safari

.time
  margin-top var(--spacing-3)

.date
  margin-top var(--spacing-3)
  color var(--white-500)

.btn-group
  margin-top var(--spacing-3)

.footer
  margin-top var(--spacing-9)

.logos-list
  display grid
  grid-template-columns repeat(2, 1fr)
  column-gap var(--spacing-7)
  row-gap var(--spacing-6)
  align-items center
  margin-top var(--spacing-5)
  margin-bottom var(--spacing-11)

.logos-list > img
  opacity 0.35

@media $breakpoint-xsmall-only
  .star
    display none

  .left
    border 0

  .graphics__item
    top -44rem
    right -62rem
    max-height 55rem

  .logos-list
    row-gap var(--spacing-7)

@media $breakpoint-small-only
  .graphics__item
    top -67rem
    right -67rem
    max-height 80rem

@media $breakpoint-small
  .btn-group
    display block

  .star
    display none

@media $breakpoint-medium-only
  .graphics__item
    top -67rem
    right -67rem
    max-height 80rem

@media $breakpoint-medium
  .left
    border 0

@media $breakpoint-large
  .logos-list
    grid-template-columns repeat(4, 1fr)

@media $breakpoint-xl
  .layer
    min-height 70rem

  .star
    display unset

  .title
    grid-column 1/span 9

  .top
    grid-column 1/span 5

  .split
    margin-top var(--spacing-8)

  .left
  .right
    margin-top 0
    grid-row 2

  .left
    grid-column 1/span 3
    border-right 1px solid var(--white-100)
    border-bottom 0

  .right
    grid-column 4/span 5

  .section-hero
    margin-top var(--spacing-9)

  .logos-list
    grid-template-columns repeat(6, 1fr)
</style>
