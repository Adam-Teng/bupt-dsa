<script setup lang="ts">
const name = $ref('')
const name1 = $ref('')
const name2 = $ref('')
const router = useRouter()
const go = () => {
  alert('已添加闹钟')
}
const goDaily = () => {
  router.push('/class/daily')
}
const goMap = () => {
  router.push('/map/map')
}
const goHomework = () => {
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
        BUPT Students System
      </a>
    </p>

    <div py-4 />

    <div>
      <button
        class="m-3 text-sm btn"
        @click="goDaily"
      >
        Go Daily
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
        @click="goHomework"
      >
        Go Homework
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

    <div>
      <a>
        以下三个输入框从上到下依次为设置每日闹钟，每周闹钟和单次闹钟
      </a>
    </div>

    <input
      id="input"
      v-model="name"
      placeholder="X时"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="150px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >

    <button
      class="m-3 text-sm btn"
      :disabled="!name"
      @click="go"
    >
      设置
    </button>
    <div py-1>
      <input
        id="input"
        v-model="name1"
        placeholder="X周X时"
        type="text"
        autocomplete="false"
        p="x-4 y-2"
        w="150px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="go"
      >

      <button
        class="m-3 text-sm btn"
        :disabled="!name1"
        @click="go"
      >
        设置
      </button>
    </div>
    <div py-1>
      <input
        id="input"
        v-model="name2"
        placeholder="X日X时"
        type="text"
        autocomplete="false"
        p="x-4 y-2"
        w="150px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="go"
      >

      <button
        class="m-3 text-sm btn"
        :disabled="!name2"
        @click="go"
      >
        设置
      </button>
    </div>
  </div>
</template>
