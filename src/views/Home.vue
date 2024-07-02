<script lang="ts">
import { defineComponent } from "vue";
import PopularArtists from "../components/PopularArtists.vue";
import PopularAlbums from "../components/PopularAlbums.vue";
import PopularRadio from "../components/PopularRadio.vue";

export default defineComponent({
  name: "Home",
  components: {
    PopularArtists,
    PopularAlbums,
    PopularRadio,
  },
});
</script>
<template>
  <div class="home bg-spotify-backgroundMainContent mb">
    <PopularArtists />
    <PopularAlbums />
    <PopularRadio />
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
}
</style>
