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
      <section-sponsored-coins />
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <section-form />
    </div>

    <div class="tm-section tm-wrapper tm-container">
      <section-countdown class="center" />
    </div>

    <div class="tm-section tm-container">
      <div class="tm-wrapper center">
        <div
          class="overline tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline tm-measure-narrow tm-muted"
        >
          Faq
        </div>
        <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title">
          Frequently asked questions
        </h1>
      </div>
      <section-questions class="mt-10" />
    </div>

    <section-footer />
  </main>
</template>

<script></script>

<style lang="stylus" scoped>
.mt-10
  margin-top var(--spacing-10)

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
.title
  margin-top var(--spacing-5)

@media $breakpoint-xsmall-only
  .star
    display none

  .graphics__item
    top -44rem
    right -62rem
    max-height 55rem

@media $breakpoint-small-only
  .graphics__item
    top -67rem
    right -67rem
    max-height 80rem

@media $breakpoint-small
  .star
    display none

@media $breakpoint-medium-only
  .graphics__item
    top -67rem
    right -67rem
    max-height 80rem

@media $breakpoint-xl
  .layer
    min-height 70rem

  .star
    display unset
</style>
