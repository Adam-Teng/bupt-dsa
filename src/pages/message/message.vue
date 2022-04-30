<script lang="ts">
import { defineComponent } from 'vue'
import SearchView from '~/components/Navigate/SearchView.vue'
import 'element-plus/dist/index.css'
export default defineComponent({
  components: {
    SearchView,
  },
  setup() {
    const router = useRouter()
    return {
      router,
    }
  },
})
</script>

<template>
  <div id="app">
    <SearchView />
  </div>
  <div>
    <button
      class="btn text-sm mt-185"
      @click="router.back()"
    >
      Back
    </button>
  </div>
</template>
