<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

interface ImageCompareSource {
  before: string;
  after: string;
}

const imageCompareSource: ImageCompareSource[] = [];

// imageCompareSource.push({
//   before: "B01.jpg",
//   after: "A01.jpg"
// });

imageCompareSource.push({
  before: "IMG_8870.jpg",
  after: "IMG_8999.jpg"
});
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Button label="Submit" />
    <div v-for="(item, index) in imageCompareSource" :key="index">
      <!-- 這個元件的左右邊跟我理解的相反 -->
      <ImageCompare class="shadow-lg rounded-2xl">
        <template #left>
          <img :src="item.after" />
        </template>
        <template #right>
          <img :src="item.before" />
        </template>
      </ImageCompare>
    </div>
    <TheWelcome />
  </main>
</template>
