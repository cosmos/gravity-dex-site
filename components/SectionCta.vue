<template>
  <div class="cards-container">
    <nuxt-link
      v-for="item in items"
      :key="item.title"
      :to="item.href"
      class="card-item"
    >
      <div class="heading tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted">
        {{ item.overline }}
      </div>
      <div class="title tm-rf1 tm-bold tm-lh-title tm-title">
        {{ item.title }} ↗
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  // TODO
  data() {
    return {
      items: [
        {
          href: 'https://gravitydex.io',
          overline: 'Guide',
          title: 'Participant Guide',
        },
        {
          href: '/',
          overline: 'Guide',
          title: 'Rules & Regulations',
        },
        {
          href: '/',
          overline: 'Support',
          title: 'Resources',
        },
      ],
    }
  },
}
</script>

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
