<template>
  <div class="section-hero">
    <div class="tm-wrapper tm-section tm-container">
      <h1 class="title tm-rf6 tm-rf7-m-up tm-bold tm-lh-title tm-title">
        {{ $t('heroHeading') }}
      </h1>
      <p class="subtitle tm-rf0 tm-rf1-m-up tm-lh-copy tm-measure">
        {{ $t('heroDesc') }}
      </p>
      <div class="btn-group">
        <tm-button
          to-link="external"
          :href="formURL"
          size="l"
          variant="contained"
          class="btn"
          >{{ $t('heroCta') }}</tm-button
        >
      </div>
      <p class="subtitle tm-rf-1 tm-lh-title mt-7">
        {{ $t('heroDate') }}
      </p>
    </div>
    <div class="hero-graphics z-graphics">
      <img src="~/assets/images/bg/green-blob.png" class="blob" />
      <graphics-hero />
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
.hero-graphics
  position relative
  overflow visible

.section-hero
  text-align center
  position relative

.blob
  position absolute
  top -160%
  left -45%

.tm-wrapper
  width 100%
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

@media $breakpoint-xsmall-only
  .blob
    display none // todo

  .hero-graphics
    padding-top var(--spacing-12)
    padding-bottom var(--spacing-13)
</style>
