<template>
  <main>
    <div class="section-hero section-first text-center">
      <div class="tm-wrapper tm-section tm-container tm-grid-base">
        <div class="text">
          <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title mt-5">
            Thank you for submitting the form!
          </h1>
          <tm-button to-link="internal" to="/" class="btn mt-7"
            >&#8592; Home
          </tm-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: '404',
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-hero .text
  grid-column 1/-1

@media $breakpoint-xl
  .section-hero .text
    grid-column 2/span 10
</style>
