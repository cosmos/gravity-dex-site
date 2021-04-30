<template>
  <div>
    <section-primary-nav />
    <div id="content">
      <!-- all page content here - hidden when mobile nav open -->
      <nuxt />
    </div>
    <section-footer />
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="stylus">
// Accessible/SEO friendly CSS hiding
.sr-only
  position absolute
  height 1px
  width 1px
  overflow hidden
  clip rect(1px, 1px, 1px, 1px)

// https://nuxtjs.org/examples/transitions
.page-enter-active
  transition opacity 0.2s $ease-out
.page-leave-active
  transition opacity 0.2s $ease-out

.page-enter,
.page-leave-to
  opacity 0

#content
  overflow hidden

.section-first
  padding-top 5rem // approx navbar max height

.center
  display grid
  place-items center
  center()
  width 100% // safari

// TODO: move to utilities css
.text-center
  text-align center

// z-index for text (highest)
.z-text
  z-index $z-index-text

.z-graphics
  z-index $z-index-graphics

.mt-10
  margin-top var(--spacing-10)

.mt-9
  margin-top var(--spacing-9)

.mb-9
  margin-bottom var(--spacing-9)

.mt-8
  margin-top var(--spacing-8)

.mb-8
  margin-bottom var(--spacing-8)

.mt-7
  margin-top var(--spacing-7)

.mt-5
  margin-top var(--spacing-5)

.mt-3
  margin-top var(--spacing-3)
</style>
