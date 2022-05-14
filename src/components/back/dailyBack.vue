<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <button
      class="btn text-sm mt-5"
      @click="router.back()"
    >
      Back
    </button>
  </div>
</template>
