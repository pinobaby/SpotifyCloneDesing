<template>
  <div class="popular-radio text-spotify-white">
    <h2 class="text-xl font-bold mb-4">Popular Radio</h2>
    <div class="grid grid-cols-6 gap-4 text-xs">
      <div v-for="radio in radio" :key="radio.name" class="flex flex-col items-center text-xs">
        <img :src="radio.image" alt="radio.name" class="w-32 h-32 mb-2 text-xs">
        <span>{{ radio.name }}</span>
        <span class="text-xs text-gray-400 text-center">{{ radio.artist }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PopularRadio',
  data() {
    return {
      radio: [
        { name: 'Calibre 50 Radio', artist: 'With El Komander, Banda Los Recoditos, Gerardo Ortiz and more', image: '	https://seeded-session-images.scdn.co/v2/img/540/r/artist/4jogXSSvlyMkODGSZ2wc2P/en' },
        { name: 'Carin León Radio', artist: 'With Grupo Firme, Grupo Frontera, El Fantasma and more', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/66ihevNkSYNzRAl44dx6jJ/en' },
        { name: 'La Arrolladora banda el limón Radio', artist: 'With Grupo Firme, Grupo Frontera, El Fantasma and more', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/5bSfBBCxY8QAk4Pifveisz/en' },
        { name: 'Karol G Radio', artist: 'With NATTI NATASHA, Becky G, Manuel Turizo and more', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/790FomKkXshlbRYZFtlgla/en' },
        { name: 'Joan Sebastian Radio', artist: 'With Conjunto Primavera, Antonio Aguilar, Pepe Aguilar and more', image: 'https://seeded-session-images.scdn.co/v2/img/540/r/artist/7FsRH5bw8iWpSbMX1G7xf1/en' },
        { name: 'Bad Bunny Radio', artist: 'With Rauw Alejandro, Myke Towers, Feid and more', image: '	https://seeded-session-images.scdn.co/v2/img/540/r/artist/4q3ewBCX7sLwd24euuV69X/en' },
      ],
    };
  },
});
</script>

<style scoped>
.popular-radio img {
  object-fit: cover;
}

.text-xs {
  font-size: 0.55rem;
  line-height: 1rem;
}
</style>
