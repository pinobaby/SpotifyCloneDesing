<template>
  <div >

    <div class="bg-spotify-gray text-spotify-white p-3 flex justify-between items-center mt-2 rounded-md">
      <div class="flex space-x-0">
        <button class="w-5 h-5 flex items-center justify-center bg-spotify-button rounded-full">&lt;</button>
        <button class="w-5 h-5 flex items-center justify-center bg-spotify-button rounded-full">&gt;</button>
      </div>
      <div class="-p-2">
        <button class="mr-5 text-spotify-lightgray h-1 text-xs">Sign up</button>
        <button class="bg-white text-spotify-black px-3 py-1 rounded-lg text-xs mr-2">Log in</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.text-xs {
  font-size: 0.55rem
    /* 12px */
  ;
  line-height: 1rem
    /* 16px */
  ;
}
</style>
