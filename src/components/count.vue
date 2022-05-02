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
  <div>
    <p>
      <a>
        备注：
        <ul>
          <li>地图上有X个点，X条边</li>
          <li>关于公交车和班车：默认跨校区之间都采用公交车或班车，则根据系统设定，在班车发车前15分钟内选择班车往返两校区之间所用时间短于公交车，其他情况选用公交车</li>
        </ul>
      </a>
    </p>
  </div>
</template>
