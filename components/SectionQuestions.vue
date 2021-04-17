<template>
  <div class="tm-container">
    <tm-accordion :content="agendas" multiple />
  </div>
</template>

<script>
export default {
  data() {
    return {
      agendas: [
        {
          id: 101,
          title: 'SAMUEL L. IPSUM',
          details:
            "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
          active: false,
        },
        {
          id: 102,
          title: 'Title 2',
          details: 'asd',
          active: false,
        },
        {
          id: 103,
          title: 'Title 3',
          details: 'asd',
          active: false,
        },
        {
          id: 104,
          title: 'Title 4',
          details: 'asd',
          active: false,
        },
        {
          id: 105,
          title: 'Title 5',
          details: 'asd',
          active: false,
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped></style>
