<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import userStore from '~/stores/user'
import test from '~/components/test.vue'
import FormLogin from '~/components/FormLogin.vue'

export default defineComponent({
  name: 'BuptStudentSystem',
  components: {
    FormLogin,
    test,
  },
  setup() {
    onMounted(userStore.getUser)
    return { userStore }
  },
})
</script>

<template>
  <div>
    <div v-if="!userStore.getters.isLoggedIn">
      <FormLogin />
    </div>
    <div v-else>
      <test />
      <div py-2 />
      <button class="btn btn-secondary" @click="userStore.logout">
        Logout
      </button>
    </div>
  </div>
</template>
