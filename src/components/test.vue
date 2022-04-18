<script setup lang="ts">
const name = $ref('')
const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
const goClass = () => {
  router.push('/class/class')
}
const goMap = () => {
  router.push('/map/map')
}
const goActivity = () => {
  router.push('/activity/activity')
}
const goMessage = () => {
  router.push('/message/message')
}
</script>

<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a text-2xl rel="noreferrer" target="_blank">
        BUPT Student System
      </a>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="goClass"
      >
        Go Class
      </button>
    </div>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="goMap"
      >
        Go Map
      </button>
    </div>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="goActivity"
      >
        Go Activity
      </button>
    </div>

    <div>
      <button
        class="m-3 text-sm btn"
        @click="goMessage"
      >
        Go Message
      </button>
    </div>
  </div>
</template>
