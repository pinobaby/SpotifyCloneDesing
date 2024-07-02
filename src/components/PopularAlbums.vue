<template>
  <div class="popular-albums">
    <h2 class="text-2xl font-bold mb-4">Popular albums</h2>
    <div class="grid grid-cols-6 gap-4">
      <div v-for="album in albums" :key="album.name" class="flex flex-col items-center">
        <img :src="album.image" alt="album.name" class="w-36 h-36 mb-2">
        <span>{{ album.name }}</span>
        <span class="text-sm text-gray-400">{{ album.artist }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PopularAlbums',
  data() {
    return {
      albums: [
        { name: 'ÉXODO', artist: 'Peso Pluma', image: 'path-to-image1' },
        { name: '$AD BOYZ 4 LIFE II', artist: 'Junior H', image: 'path-to-image2' },
        { name: 'Un Verano Sin Ti', artist: 'Bad Bunny', image: 'path-to-image3' },
        { name: 'Pa las Baby\'s Y Belikeada', artist: 'Fuerza Regida', image: 'path-to-image4' },
        { name: 'THE GB', artist: 'Gabito Ballesteros', image: 'path-to-image5' },
        { name: 'PRESENTE', artist: 'Julián Álvarez y su Norteño Banda', image: 'path-to-image6' },
        { name: 'Nata Montana', artist: 'Natanael Cano', image: 'path-to-image7' },
        // Agrega más álbumes según sea necesario
      ],
    };
  },
});
</script>

<style scoped>
.popular-albums img {
  object-fit: cover;
}
</style>
