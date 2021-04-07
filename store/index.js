export const state = () => ({
  countdown: {
    now: Math.trunc(new Date(new Date().toUTCString()).getTime() / 1000),
    // registration date time in UTC
    date: '2021-04-21',
    time: '00:00',
  },
})

export const mutations = {
  updateNow(state) {
    state.countdown.now = Math.trunc(new Date().getTime() / 1000)
  },
}
