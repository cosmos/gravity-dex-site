export const state = () => ({
  countdown: {
    now: Math.trunc(new Date(new Date().toUTCString()).getTime() / 1000),
    // UTC time
    date: '2021-05-04',
    time: '01:00',
  },
})

export const mutations = {
  updateNow(state) {
    state.countdown.now = Math.trunc(new Date().getTime() / 1000)
  },
}
