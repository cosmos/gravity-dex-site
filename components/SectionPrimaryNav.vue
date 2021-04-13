<template>
  <div class="navs">
    <nav
      class="nav nav-primary"
      role="navigation"
      :class="{ 'is-active': isActive }"
    >
      <div class="nav-inner tm-container tm-wrapper">
        <div class="nav-first">
          <NuxtLink to="/" class="logo">
            <logo-gravity-dex-wordmark class="logo__gravity" />
            <span class="sr-only">Gravity Dex</span>
          </NuxtLink>
          <!-- <button
            class="nav-mobile-toggle"
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            :class="{ 'is-active': isActive }"
            @click="isActive = !isActive"
          >
            <span class="nav-mobile-toggle__icon"></span>
            <span class="sr-only">Menu</span>
          </button> -->
        </div>
        <!-- <div class="nav-second">
          <ul>
            <li>
              <a href="#" class="text tm-rf-1 tm-medium tm-lh-title tm-link"
                >Learn</a
              >
            </li>
            <li>
              <a href="#" class="text tm-rf-1 tm-medium tm-lh-title tm-link"
                >Build</a
              >
            </li>
            <li>
              <a href="#" class="text tm-rf-1 tm-medium tm-lh-title tm-link"
                >Explore</a
              >
            </li>
          </ul>
        </div> -->
      </div>
    </nav>
    <!-- SECONDARY NAV -->
    <!-- <nav v-if="secondary" class="nav nav-secondary" role="navigation">
      <div class="nav-inner tm-container tm-wrapper">
        <div class="nav-first">
          <NuxtLink
            to="/"
            class="logo tm-rf-1 tm-rf0-m-up tm-medium tm-lh-solid"
          >
            <logo-hub-brandmark class="logo__hub" />Hub
          </NuxtLink>
        </div>
        <div class="nav-second">
          <ul>
            <li>
              <NuxtLink
                to="/features"
                class="tm-rf-1 tm-medium tm-lh-title tm-link"
                >Features</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/staking"
                class="tm-rf-1 tm-medium tm-lh-title tm-link"
                >Staking</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/learn/faq"
                class="tm-rf-1 tm-medium tm-lh-title tm-link"
                >FAQ</NuxtLink
              >
            </li>
            <li>
              <a
                href="https://hub.cosmos.network"
                target="_blank"
                rel="noreferrer noopener"
                class="tm-rf-1 tm-medium tm-lh-title tm-link tm-link-external"
                >Documentation</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <!-- MOBILE NAV -->
    <!-- <nav
      v-if="isActive"
      :class="{ 'is-active': isActive }"
      class="nav nav-mobile-container"
    >
      <div class="nav-mobile-content tm-wrapper">
        <ul>
          <li>
            <NuxtLink to="/" class="text tm-rf1 tm-medium tm-lh-title tm-link"
              >Cosmos Hub</NuxtLink
            >
            <ul>
              <li>
                <NuxtLink to="/features" class="tm-rf0 tm-lh-title tm-link"
                  >Features</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/staking" class="tm-rf0 tm-lh-title tm-link"
                  >Staking</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/start-staking" class="tm-rf0 tm-lh-title tm-link"
                  >Get started</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/learn/faq" class="tm-rf0 tm-lh-title tm-link"
                  >FAQ</NuxtLink
                >
              </li>
              <li>
                <a
                  href="https://hub.cosmos.network"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="tm-rf0 tm-lh-title tm-link tm-link-external"
                  >Documentation</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="nav-mobile-bottom tm-wrapper">
        <tm-button background-color="var(--white)" color="var(--black)"
          >Get started</tm-button
        >
      </div>
    </nav> -->
  </div>
</template>

<script>
import LogoGravityDexWordmark from '~/components/logos/LogoGravityDexWordmark.vue'

export default {
  components: {
    LogoGravityDexWordmark,
  },
  data() {
    return {
      isActive: false,
      secondary: false, // temporary to hide secondary nav
    }
  },
  watch: {
    $route() {
      this.isActive = false
    },
  },
}
</script>

<style lang="stylus" scoped>
$navbar-height = 5rem
$navbar-mobile-menu = 200

.navs
  position relative
  z-index 200
  margin-top var(--spacing-6)

.nav
  &-inner
    width 100%
  &-inner,
  &-first
    display flex
    flex-direction row
    align-items center
    justify-content space-between
  ul
    padding 0
  li
    list-style-type none
  .logo
    display flex
    align-items center
    gap var(--spacing-4)
    padding var(--spacing-6) 0
    color inherit
    transition transform .4s $ease-out, opacity .4s $ease-out, color .4s $ease-out, visibility .4s 0s
    svg
      width auto
    &__gravity
      height var(--spacing-8)
    &-secondary
      margin-right auto
  &-secondary .logo
    svg
      width 2rem
      height auto
  .tm-link
    position relative
    display block
    border-radius $border-radius-2
    // /* exact link will show the primary color for only the exact matching link */
  .tm-link.nuxt-link-exact-active
    cursor default
    &:after
      content ""
      position absolute
      display block
      border-right 1px solid
      height var(--spacing-3)
      bottom 0
      left 50%

  &-mobile-toggle
    margin-right calc(-1 * var(--spacing-5))
    // copying .tm-button styles because we're not using the component for some reason
    padding var(--spacing-5)
    text-rendering inherit
    font-family inherit
    background none
    border none
    outline 0
    cursor pointer
    user-select none
    text-decoration none
    color inherit
    &__icon
      display flex
      flex-direction column
      justify-content center
      align-items center
      width 1.5rem
      height 1.5rem
      pointer-events none
      &:before,
      &:after
        content ""
        display block
        height 1px
        width 100%
        background-color currentColor
        transition transform .2s $ease-out
      &:before
        transform translateY(-4px) rotate(0deg)
      &:after
        transform translateY(4px) rotate(0deg)
    &.is-active &__icon
      &:before
        transform translateY(1px) rotate(45deg)
      &:after
        transform translateY(0) rotate(-45deg)
  &-mobile-container
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index $navbar-mobile-menu
    display none
    flex-direction column
    -webkit-box-orient vertical
    -webkit-box-direction normal
  .dark-mode &-mobile-container
    background var(--black)
  .light-mode &-mobile-container
    background var(--white)
  &-mobile-content
    padding-top $navbar-height
    padding-bottom var(--spacing-7)
    overflow-y auto
    flex-grow 1
    -webkit-box-flex 1
    .tm-link
      padding var(--spacing-4) var(--spacing-7)
    ul
      margin-left calc(-1 * var(--spacing-7))
      margin-right calc(-1 * var(--spacing-7))
      ul
        margin-left 0
        margin-right 0
        .tm-link-external:after
          bottom auto
  &-mobile-bottom
    padding-bottom var(--spacing-7)
    text-align center
    .tm-button
      width 100%
      max-width 20rem
  &-primary
    position relative
    z-index $navbar-mobile-menu + 1
  &-first
    gap var(--spacing-7)
  &-second,
  &-secondary
    display none

@media $breakpoint-xsmall-only
  .nav .logo__gravity
    height 2rem

@media $breakpoint-large-max
  .nav
    &-primary.is-active
      .light-mode &
        background var(--white)
      .dark-mode &
        background var(--black)
    &-first
      flex 1 1
    .tm-link
      &.nuxt-link-exact-active:after
        transform rotate(90deg)
        left 0
        bottom 50%
        transform-origin bottom
    &-mobile-container.is-active
      display flex

@media $breakpoint-large
  .nav
    ul
      margin-right calc(-1 * var(--spacing-5))
      margin-left calc(-1 * var(--spacing-5))
      display flex
      justify-content center
    .tm-link
      padding var(--spacing-7) var(--spacing-5)
    &-first
      flex 1 1 0%
    &-second
      display block
      grid-columns 1
    &-last
      flex 1 1 0%
    &-mobile-toggle
      display none

  .nav-primary
    .logo-secondary
      display none
    .nav-inner
      display grid
      grid-template-columns repeat(3, 1fr)

  .nav-second .nuxt-link-exact-active:before
    content ""
    position absolute
    display block
    border-bottom 1px solid
    width calc(1rem + 1px)
    bottom -1px
    left 50%
    margin-left -0.5rem

  .nav-secondary
    display flex
    border-top 1px solid var(--white-100)
    .light-mode &
      border-top-color var(--trans-gray-900)
    margin-top -1px
</style>
