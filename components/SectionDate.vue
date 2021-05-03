<template>
  <div class="cards-container">
    <div class="card-item">
      <span class="top-left" />
      <span class="top-right" />
      <span class="bottom-left" />
      <span class="bottom-right" />
      <div class="event tm-rf-0 tm-lh-title">
        {{ $t('registrationDeadlineTitle') }}
      </div>
      <div class="title tm-rf3 tm-bold tm-lh-title tm-title">
        {{ $t('registrationDeadlineDay') }}
      </div>
      <div class="title tm-rf0 tm-bold tm-lh-title tm-title">
        {{ $t('registrationDeadlineMonth') }}
      </div>
    </div>
    <div class="card-item">
      <span class="top-left" />
      <span class="top-right" />
      <span class="bottom-left" />
      <span class="bottom-right" />
      <div class="event tm-rf-0 tm-lh-title">{{ $t('competitionTitle') }}</div>
      <div class="title tm-rf3 tm-bold tm-lh-title tm-title">
        {{ $t('competitionDay') }}
      </div>
      <div class="title tm-rf0 tm-bold tm-lh-title tm-title">
        {{ $t('competitionMonth') }}
      </div>
    </div>
    <div class="card-item">
      <span class="top-left" />
      <span class="top-right" />
      <span class="bottom-left" />
      <span class="bottom-right" />
      <div class="event tm-rf-0 tm-lh-title">{{ $t('winnersTitle') }}</div>
      <div class="title tm-rf3 tm-bold tm-lh-title tm-title">
        {{ $t('winnersDay') }}
      </div>
      <div class="title tm-rf0 tm-bold tm-lh-title tm-title">
        {{ $t('winnersMonth') }}
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="stylus" scoped>
.cards-container
  display grid

.card-item
  padding 1.5rem 2rem
  border-radius $border-radius-5
  position relative
  margin-right -1px

.top-left
  position absolute
  top 0
  left 0
  angle-accent(nw)

.top-right
  position absolute
  top 0
  right 0
  angle-accent(ne)

.bottom-left
  position absolute
  bottom 0
  left 0
  angle-accent(sw)

.bottom-right
  position absolute
  bottom 0
  right 0
  angle-accent(se)

@media $breakpoint-medium
  .cards-container
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-large
  .cards-container
    grid-template-columns repeat(3, 1fr)
</style>
