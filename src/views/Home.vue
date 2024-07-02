<template>
  <div class="home">
    <PopularArtists />
    <PopularAlbums />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PopularArtists from '../components/PopularArtists.vue';
import PopularAlbums from '../components/PopularAlbums.vue';

export default defineComponent({
  name: 'Home',
  components: {
    PopularArtists,
    PopularAlbums,
  },
});
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
