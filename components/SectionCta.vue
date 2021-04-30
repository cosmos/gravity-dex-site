<template>
  <div class="cards-container">
    <tm-link :href="$t('ctaFirstUrl')" class="card-item">
      <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted">
        {{ $t('ctaFirstOverline') }}
      </div>
      <div class="title tm-rf1 tm-bold tm-lh-title tm-title">
        {{ $t('ctaFirstTitle') }} ↗
      </div>
    </tm-link>
    <!-- <tm-link :href="$t('ctaSecondUrl')" class="card-item">
      <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted">
        {{ $t('ctaSecondOverline') }}
      </div>
      <div class="title tm-rf1 tm-bold tm-lh-title tm-title">
        {{ $t('ctaSecondTitle') }} ↗
      </div>
    </tm-link>
    <tm-link :href="$t('ctaThirdUrl')" class="card-item">
      <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted">
        {{ $t('ctaThirdOverline') }}
      </div>
      <div class="title tm-rf1 tm-bold tm-lh-title tm-title">
        {{ $t('ctaThirdTitle') }} ↗
      </div>
    </tm-link> -->
  </div>
</template>

<script></script>

<style lang="stylus" scoped>
.cards-container
  display grid
  gap var(--spacing-7)

.card-item
  padding var(--spacing-7)
  border-radius $border-radius-5
  hover-raise(-3px)
  box-shadow var(--elevation-4)
  background-color var(--fg)
  grid-column-start 2 // TODO

.card-item .title
  margin-top var(--spacing-3)

@media $breakpoint-medium
  .cards-container
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-large
  // Intro
  .cards-container
    grid-template-columns repeat(3, 1fr)
</style>
