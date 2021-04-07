<template>
  <div>
    <section-primary-nav />
    <div id="content">
      <!-- all page content here - hidden when mobile nav open -->
      <nuxt />
    </div>
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

@media $breakpoint-large-max
  .mobile-menu-open
    #content
      display none
</style>
