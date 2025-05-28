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
  <div class="relative w-full max-w-300 cursor-pointer" @click="toggle" style="padding-top: 75%;">
    <Image class="absolute top-0 left-0 w-full h-full object-cover transition-all duration-[3000ms]"
      :class="[showImage2 ? 'opacity-0 grayscale' : 'opacity-100 grayscale']" :src="image1" />
    <Image class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[3000ms]"
      :class="[showImage2 ? 'opacity-100' : 'opacity-0']" :src="image2" />
  </div>
</template>
