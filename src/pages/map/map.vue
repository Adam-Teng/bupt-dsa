<script lang="ts">
import { defineComponent } from 'vue'
import SearchView from '~/components/Navigate/SearchView.vue'
import gmView from '~/components/Navigate/gmView.vue'
import MapView from '~/components/Navigate/MapView.vue'
import 'element-plus/dist/index.css'
export default defineComponent({
  components: {
    MapView,
    SearchView,
    gmView,
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
