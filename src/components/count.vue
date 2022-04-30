<script setup lang="ts">
const { counter, pause, resume } = $(useInterval(1000, { immediate: false, controls: true }))
function alarm() {
  if (counter === 5) {
    setTimeout(() => {
      alert('alarm')
    }, 10)
  }
}
function formatTime(value: number) {
  const result = value % (30 * 24 * 10)
  const d = Math.floor(result / (10 * 24)) < 10 ? `0${Math.floor(result / (10 * 24))}` : Math.floor(result / (10 * 24))
  const h = Math.floor((result / 10) % 24) < 10 ? `0${Math.floor((result / 10) % 24)}` : Math.floor((result / 10) % 24)
  const m = Math.floor(result % 10)
  return `六月${d}日 ${h}时 ${m}`
}
watchEffect(() => {
  alarm()
})
const timeText = computed(() => formatTime(counter))
</script>
<template>
  <div flex justify-center>
    <div font-mono text-1xl flex="~ gap-3" item-center>
      <div i-carbon-timer />
      {{ timeText }}
      <button @click="pause()">
        <div i-carbon-pause />
      </button>
      <button @click="resume()">
        <div i-carbon-continue />
      </button>
    </div>
  </div>
</template>
