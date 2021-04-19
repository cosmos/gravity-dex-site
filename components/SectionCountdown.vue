<template>
  <div v-if="toTimezone(endDate, endTime) >= moment()">
    <div class="overline tm-rf0 tm-medium tm-lh-title tm-overline">
      Time remaining to register
    </div>
    <tm-countdown
      :now="currentTime"
      :end="countdownTimer(endDate, endTime)"
      class="time tm-rf5 tm-bold tm-lh-copy tm-code"
    />
    <!-- <div class="date tm-rf0 tm-medium tm-lh-title tm-overline">April 21</div> -->
  </div>
</template>

<script>
import moment from 'moment-timezone'

export default {
  components: {},
  data() {
    return {
      moment,
    }
  },
  computed: {
    currentTime() {
      return this.$store.state.countdown.now
    },
    endDate() {
      return this.$store.state.countdown.date
    },
    endTime() {
      return this.$store.state.countdown.time
    },
  },
  mounted() {
    window.setInterval(() => {
      this.$store.commit('updateNow')
    }, 1000)
  },
  methods: {
    countdownTimer(date, time) {
      return moment.tz(`${date} ${time}`, 'UTC').format()
    },
    toTimezone(date, time) {
      return (
        moment
          // set base time with UTC
          // get timezone with i18n API - Intl.DateTimeFormat().resolvedOptions().timeZone
          .tz(`${date} ${time}`, 'UTC')
          // use client's locale time zone
          .tz(moment.tz.guess())
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.time
  margin-top var(--spacing-3)

.date
  margin-top var(--spacing-3)
  color var(--white-500)
</style>
