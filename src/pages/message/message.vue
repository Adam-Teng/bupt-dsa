<script lang="ts">
// test
import { defineComponent } from 'vue'
import manager from '~/components/message/Manager.vue'
import box1 from '~/components/message/box1.vue'
import box2 from '~/components/message/box2.vue'
import box3 from '~/components/message/box3.vue'
import 'element-plus/dist/index.css'
export default defineComponent({
  components: {
    manager,
    box1,
    box2,
    box3,
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
  <div id="app" />
  <manager />
  <box1 />
  <box2 />
  <box3 />
  <div>
    <button
      class="btn text-sm mt-5"
      @click="router.back()"
    >
      Back
    </button>
  </div>
</template>
