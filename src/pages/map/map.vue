<script lang="ts">
import { defineComponent } from 'vue'
import SearchView from '~/components/Navigate/SearchView.vue'
import gmView from '~/components/Navigate/gmView.vue'
import MapView from '~/components/Navigate/MapView.vue'
import LogView from '~/components/Navigate/LogView.vue'
import 'element-plus/dist/index.css'
export default defineComponent({
  components: {
    MapView,
    SearchView,
    gmView,
    LogView,
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
    <map-view />
    <gm-view />
    <search-view />
    <log-view />
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
