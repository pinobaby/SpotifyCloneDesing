<template>
  <div class="home bg-spotify-backgroundMainContent mb-2">
    <PopularArtists />
    <PopularAlbums />
    <PopularRadio />
  </div>
</template>

<script setup lang="ts">
import PopularArtists from '../components/PopularArtists.vue';
import PopularAlbums from '../components/PopularAlbums.vue';
import PopularRadio from '../components/PopularRadio.vue';
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
