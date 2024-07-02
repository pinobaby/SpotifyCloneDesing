<template>
  <div class="popular-artists">
    <h2 class="text-2xl font-bold mb-4">Popular artists</h2>
    <div class="grid grid-cols-8 gap-4">
      <div v-for="artist in artists" :key="artist.name" class="flex flex-col items-center">
        <img :src="artist.image" alt="artist.name" class="w-24 h-24 rounded-full mb-2">
        <span>{{ artist.name }}</span>
        <span class="text-sm text-gray-400">Artist</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PopularArtists',
  data() {
    return {
      artists: [
        { name: 'Peso Pluma', image: 'path-to-image1' },
        { name: 'Fuerza Regida', image: 'path-to-image2' },
        { name: 'Natanael Cano', image: 'path-to-image3' },
        { name: 'Oscar Maydon', image: 'path-to-image4' },
        { name: 'Luis R Conriquez', image: 'path-to-image5' },
        { name: 'Junior H', image: 'path-to-image6' },
        { name: 'Bad Bunny', image: 'path-to-image7' },
        // Agrega más artistas según sea necesario
      ],
    };
  },
});
</script>

<style scoped>
.popular-artists img {
  object-fit: cover;
}
</style>
