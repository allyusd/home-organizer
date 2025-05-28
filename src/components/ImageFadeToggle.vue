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
  <div class="relative w-300 h-220 cursor-pointer" @click="toggle">
    <!-- 圖片 1（灰階）-->
    <Image class="absolute inset-0 w-full h-full object-cover transition-all duration-3000" :class="[
      showImage2 ? 'opacity-0' : 'opacity-100 grayscale',
    ]" :src="image1" />
    <!-- 圖片 2（彩色）-->
    <Image class="absolute inset-0 w-full h-full object-cover transition-opacity duration-3000" :class="[
      showImage2 ? 'opacity-100' : 'opacity-0'
    ]" :src="image2" />
  </div>
</template>
