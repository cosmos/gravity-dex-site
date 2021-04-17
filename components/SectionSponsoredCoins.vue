<template>
  <div>
    <div class="overline tm-rf-1 tm-medium tm-lh-title tm-overline">
      Sponsored coins
    </div>
    <div class="logos-list">
      <img src="~static/logos/cosmos-hub.svg" alt="Cosmos Hub logo" />
      <img src="~static/logos/terra-money.svg" alt="Terra Money logo" />
      <img src="~static/logos/regen-network.svg" alt="Regen Network logo" />
      <img src="~static/logos/bitsong.svg" alt="Bitsong logo" />
      <img src="~static/logos/sentinel.svg" alt="Sentinel logo" />
      <img src="~static/logos/persistence.svg" alt="Persistence logo" />
      <img src="~static/logos/akash.svg" alt="Akash logo" />
      <img src="~static/logos/e-money.svg" alt="E money logo" />
      <img src="~static/logos/irisnet.svg" alt="Irisnet logo" />
      <img src="~static/logos/agoric.svg" alt="Agoric logo" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
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
  .logos-list
    row-gap var(--spacing-7)

@media $breakpoint-large
  .logos-list
    grid-template-columns repeat(4, 1fr)

@media $breakpoint-xl
  .logos-list
    grid-template-columns repeat(6, 1fr)
</style>
