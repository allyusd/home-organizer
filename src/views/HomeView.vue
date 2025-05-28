<script setup lang="ts">
import ImageFadeToggle from '../components/ImageFadeToggle.vue';

interface ImageCompareSource {
  before: string;
  after: string;
}

const imageCompareSource: ImageCompareSource[] = [];

imageCompareSource.push({
  before: "IMG_8870.jpg",
  after: "IMG_8999.jpg"
});
</script>

<template>
  <div class="font-bold text-2xl text-center pb-4">整理收納成果展示</div>

  <div v-for="(item, index) in imageCompareSource" :key="index">
    <div class="font-bold text-2xl text-center">點擊圖片看結果</div>
    <ImageFadeToggle class="p-4" :image1="item.before" :image2="item.after" />

    <div class="font-bold text-2xl text-center">移動圖片中間圖示比較前後差異</div>
    <!-- 這個元件的左右邊跟我理解的相反 -->
    <ImageCompare class="shadow-lg rounded-2xl" :pt="{
      root: {
        style: 'aspect-ratio: 4 / 3;'
      }
    }">
      <template #left>
        <img :src="item.after" />
      </template>
      <template #right>
        <img :src="item.before" />
      </template>
    </ImageCompare>
  </div>
</template>
