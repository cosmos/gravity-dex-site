<template>
  <div class="section-hero">
    <div class="tm-wrapper tm-section tm-container">
      <h1 class="title tm-rf6 tm-rf7-m-up tm-bold tm-lh-title tm-title">
        Bringing DeFi<br />
        to Cosmos
      </h1>
      <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure">
        The Gravity DEX testnet competition is now live with a ~$200,000 prize
        pool in ATOM and ten other Cosmos assets.
      </p>
      <div class="btn-group">
        <tm-button
          to-link="external"
          :href="formURL"
          size="l"
          variant="contained"
          class="btn"
          >Register Now</tm-button
        >
      </div>
      <p class="subtitle tm-rf-1 tm-lh-title mt-7">
        Registration ends April 30.
      </p>
    </div>
  </div>
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
.section-hero
  text-align center
  position relative
  z-index 200

.tm-wrapper
  width 100%
  padding-bottom 0
  display flex
  flex-direction column
  align-items center

.subtitle
  margin-top var(--spacing-6)
  max-width 22em
  color var(--white-800)
  font-feature-settings 'liga' on, 'calt' on, 'zero' on // safari

.btn-group
  margin-top var(--spacing-8)

@media $breakpoint-small
  .btn-group
    display block
</style>
