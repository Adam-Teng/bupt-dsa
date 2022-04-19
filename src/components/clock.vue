<script lang="ts">
import { defineComponent } from 'vue'
import { HOUR, SECOND, getHourTime, getZeroPad } from '~/typings/filters'

export default defineComponent ({
  props: {
    isHour: {
      type: Boolean,
      default: true,
    },
    isMinute: {
      type: Boolean,
      default: true,
    },
    isSecond: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      hours: 0,
      minutes: '',
      seconds: '',
      hourtime: '',
    }
  },
  mounted() {
    const timer = window.setTimeout(this.updateDateTime, SECOND)
    this.$on('hook:destroyed', () => window.clearTimeout(timer))
  },
  methods: {
    updateDateTime() {
      const now = new Date()
      this.hours = now.getHours()
      this.minutes = getZeroPad(now.getMinutes())
      this.seconds = getZeroPad(now.getSeconds())
      this.hourtime = getHourTime(this.hours)
      this.hours = this.hours % HOUR || HOUR
      this.$options.timer = window.setTimeout(this.updateDateTime, SECOND)
    },
  },
})

</script>

<template>
  <div v-if="hourtime != ''" class="clock">
    <div v-if="isHour" class="clock__hours">
      <span class="clock__hourtime" v-text="hourtime" />
      <span v-text="hours" />
    </div>
    <div v-if="isMinute" class="clock__minutes" v-text="minutes" />
    <div v-if="isSecond" class="clock__seconds" v-text="seconds" />
  </div>
</template>
