<script lang="ts">
import { defineComponent, reactive } from 'vue'
import userStore from '../stores/user'

export default defineComponent({
  setup() {
    const form = reactive({
      username: '',
      password: '',
    })

    const onSubmit = () => {
      userStore.login(form.username, form.password)
      form.username = ''
      form.password = ''
    }

    return { form, userStore, onSubmit }
  },
})

</script>

<template>
  <div i-carbon-campsite text-4xl inline-block />
  <p>
    <a text-2xl rel="noreferrer" target="_blank">
      BUPT Student System
    </a>
  </p>

  <div py-2 />

  <form>
    <div class="form-group my-2">
      <label username>Username</label>
      <div py-1 />
      <input
        v-model="form.username"
        type="text"
        class="form-control"
        placeholder="username"
        p="x-4 y-2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        required
      >
    </div>
    <div py-2 />
    <div class="form-group my-2">
      <label password>password</label>
      <div py-1 />
      <input
        v-model="form.password"
        type="password"
        class="form-control"
        placeholder="password"
        p="x-4 y-2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        required
      >
    </div>

    <div class="text-danger my-2">
      {{ userStore.state.error }}
    </div>
    <button class="btn btn-success btn-block my-2" type="submit" click="onSubmit">
      Login
    </button>
  </form>
</template>
