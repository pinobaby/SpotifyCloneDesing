<template>
  <div class="popular-artists text-spotify-white mb-4">
    <h2 class="text-xl font-bold mb-4">Popular artists</h2>
    <div class="grid grid-cols-8 gap-4">
      <div v-for="artist in artists" :key="artist.name" class="flex flex-col items-center">
        <img :src="artist.image" :alt="artist.name" class="w-24 h-24 rounded-full mb-2">
        <span class="flex text-start text-xs">{{ artist.name }}</span>
        <span class="text-sm text-gray-400 text-start">Artist</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const artists = ref([
  { name: 'Peso Pluma', image: 'https://i.scdn.co/image/ab6761610000e5ebc08ef51312b27a1237bec73f' },
  { name: 'Fuerza Regida', image: 'https://i.scdn.co/image/ab676161000051741b85fbf9507041aab224336d' },
  { name: 'Natanael Cano', image: 'https://i.scdn.co/image/ab676161000051740819edd43096a2f0dde7cd44' },
  { name: 'Oscar Maydon', image: 'https://i.scdn.co/image/ab67616100005174eea2f0ffd6afcffa3e74cd89' },
  { name: 'Luis R Conriquez', image: 'https://i.scdn.co/image/ab6761610000517486e60a20b80600f450cd698c' },
  { name: 'Junior H', image: 'https://i.scdn.co/image/ab6761610000517450998d90507d8c1603b2530b' },
  { name: 'Bad Bunny', image: 'https://i.scdn.co/image/ab676161000051749ad50e478a469448c6f369df' },
  { name: 'Bizarap', image: 'https://i.scdn.co/image/ab6761610000517414add0d3419426b84158b913' },
]);
</script>

<style scoped>
.popular-artists img {
  object-fit: cover;
}
.text-xs {
  font-size: 0.55rem;
  line-height: 1rem;
}
</style>
