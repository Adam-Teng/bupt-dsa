<script setup lang="ts">
const start = new Date()
const now = $(useNow())
const timerMS = $computed(() => Math.round((+now - +start) / 1000))
function formatTime(value: number) {
  const result = value % (30 * 24 * 6)
  const d = Math.floor(result / (6 * 24)) < 10 ? `0${Math.floor(result / (6 * 24))}` : Math.floor(result / (6 * 24))
  const h = Math.floor((result / 6) % 24) < 10 ? `0${Math.floor((result / 6) % 24)}` : Math.floor((result / 6) % 24)
  const m = Math.floor(result % 6)
  return `June ${d} ${h}:${m}0`
}
const timeText = computed(() => formatTime(timerMS))
</script>
<template>
  <div>
    {{ timeText }}
  </div>
</template>
