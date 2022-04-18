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
})
</script>

<template>
  <div id="app">
    <map-view />
    <gm-view />
    <search-view />
  </div>
</template>
