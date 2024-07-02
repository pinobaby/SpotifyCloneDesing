<template>
  <div class="popular-albums text-spotify-white mb-4">
    <h2 class="text-xl font-bold mb-4">Popular albums</h2>
    <div class="grid grid-cols-6 gap-4">
      <div v-for="album in albums" :key="album.name" class="flex flex-col items-center text-xs">
        <img :src="album.image" alt="album.name" class="w-32 h-32 mb-2 text-xs">
        <span>{{ album.name }}</span>
        <span class="text-xs text-gray-400 text-start">{{ album.artist }}</span>
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
        { name: 'ÉXODO', artist: 'Peso Pluma', image: 'https://i.scdn.co/image/ab67616d00001e022690127e1d6cd0aa35cc353b' },
        { name: '$AD BOYZ 4 LIFE II', artist: 'Junior H', image: 'https://i.scdn.co/image/ab67616d00001e02f3ba6742a35f111aaea1ca2f' },
        { name: 'Un Verano Sin Ti', artist: 'Bad Bunny', image: 'https://i.scdn.co/image/ab67616d00001e0249d694203245f241a1bcaa72' },
        { name: 'THE GB', artist: 'Gabito Ballesteros', image: 'https://i.scdn.co/image/ab67616d00001e0246c5c2f89c37fc6809249316' },
        { name: 'DISTORSION', artist: 'Oscar Maydon', image: 'https://i.scdn.co/image/ab67616d00001e0280c0cca1f04f91858a72ed09' },
        { name: 'Nata Montana', artist: 'Natanael Cano', image: 'https://i.scdn.co/image/ab67616d00001e02e2e093427065eaca9e2f2970' },
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
.text-xs {
  font-size: 0.55rem;
  line-height: 1rem;
}
</style>
