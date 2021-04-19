<template>
  <div class="logos-list">
    <tm-link v-for="item in list" :key="item.text" :href="item.url">
      <tm-tooltip :text="`${item.text} ↗`" position="top-center">
        <img
          :src="require(`~/assets/images/logos/${item.img}.svg`)"
          :alt="item.text"
        />
      </tm-tooltip>
    </tm-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url: 'https://cosmos.network',
          text: 'ATOM (Cosmos Hub)',
          img: 'cosmos-hub',
        },
        {
          url: 'https://terra.money',
          text: 'Terra Money',
          img: 'terra-money',
        },
        {
          url: 'https://regen.network',
          text: 'Regen Network',
          img: 'regen-network',
        },
        {
          url: 'https://bitsong.io',
          text: 'Bitsong',
          img: 'bitsong',
        },
        {
          url: 'https://sentinel.co',
          text: 'Sentinel',
          img: 'sentinel',
        },
        {
          url: 'https://persistence.one',
          text: 'Persistence',
          img: 'persistence',
        },
        {
          url: 'https://akash.network',
          text: 'Akash',
          img: 'akash',
        },
        {
          url: 'https://e-money.com',
          text: 'e-Money',
          img: 'e-money',
        },
        {
          url: 'https://irisnet.org',
          text: 'Irisnet',
          img: 'irisnet',
        },
        {
          url: 'https://agoric.com',
          text: 'Agoric',
          img: 'agoric',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.logos-list
  display grid
  grid-template-columns repeat(2, 1fr)
  column-gap var(--spacing-7)
  row-gap var(--spacing-6)
  align-items center

.logos-list > a
  opacity 0.35

@media $breakpoint-xsmall-only
  .logos-list
    row-gap var(--spacing-7)

@media $breakpoint-large
  .logos-list
    grid-template-columns repeat(4, 1fr)

@media $breakpoint-xl
  .logos-list
    grid-template-columns repeat(6, 1fr)
</style>
