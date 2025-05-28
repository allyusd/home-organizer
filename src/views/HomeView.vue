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

imageCompareSource.push({
  before: "IMG_8827.jpg",
  after: "IMG_8833.jpg"
});
</script>

<template>
  <div class="flex flex-col items-center">
    <!-- 主標題 -->
    <div class="font-extrabold text-4xl text-center pb-6 text-gray-800 drop-shadow-md">
      整理收納成果展示
    </div>

    <div class="max-w-[800px]">
      <Tabs value="0">
        <TabList class="flex justify-center space-x-4 mb-6">
          <Tab v-for="(item, index) in imageCompareSource" :key="'tab-' + index" :value="index.toString()"
            class="cursor-pointer px-4 py-2 border rounded">
            {{ `作品 ${index + 1}` }}
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel v-for="(item, index) in imageCompareSource" :key="'panel-' + index" :value="index.toString()">
            <!-- 子標題 -->
            <div class="font-semibold text-xl text-center pb-3 text-gray-600">
              點擊圖片切換前後效果
            </div>
            <div class="flex justify-center">
              <ImageFadeToggle :image1="item.before" :image2="item.after" />
            </div>

            <div class="font-semibold text-xl text-center pt-6 pb-3 text-gray-600">
              拖動中間滑桿比較前後差異
            </div>
            <ImageCompare class="shadow-lg rounded-2xl mx-auto" :pt="{ root: { style: 'aspect-ratio: 4 / 3;' } }">
              <template #left>
                <img :src="item.after" />
              </template>
              <template #right>
                <img :src="item.before" />
              </template>
            </ImageCompare>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </div>
</template>
