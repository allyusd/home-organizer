<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  image1: { type: String, required: true },
  image2: { type: String, required: true },
})

const showImage2 = ref(false)
const toggle = () => {
  showImage2.value = !showImage2.value
}
</script>

<template>
  <div class="relative w-300 h-180 cursor-pointer" @click="toggle">
    <!-- 圖片 1 -->
    <img :src="image1" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-3000"
      :class="{ 'opacity-0': showImage2, 'opacity-100': !showImage2 }" />
    <!-- 圖片 2 -->
    <img :src="image2" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-3000"
      :class="{ 'opacity-100': showImage2, 'opacity-0': !showImage2 }" />
  </div>
</template>
