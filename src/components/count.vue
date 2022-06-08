<script setup lang="ts">
const { counter, pause, resume } = $(useInterval(1000, { immediate: false, controls: true }))
function alarm() {
  if (counter % 240 === 70) {
    setTimeout(() => {
      alert('起床')
    }, 10)
  }
  if (counter % (240 * 7) === (240 * 5 + 90)) {
    setTimeout(() => {
      alert('外出游玩')
    }, 10)
  }
  if (counter % 10000000000000 === 10) {
    setTimeout(() => {
      alert('测试')
    }, 10)
  }
}
function formatTime(value: number) {
  const result = (value + 240) % (30 * 24 * 10)
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
          <li>地图上有247个点，320条边,2个校区，其中学校内各类设施数目大于100个</li>
          <li>关于公交车和班车：默认跨校区之间都采用公交车或班车，则根据系统设定，在班车发车前12分钟内选择班车往返两校区之间所用时间短于公交车，其他情况选用公交车</li>
          <li>共12个课程数目，25个课外活动</li>
        </ul>
      </a>
    </p>
  </div>
</template>
