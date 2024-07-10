<template>
    <div
      class="bg-spotify-gray text-spotify-white p-3 flex justify-between items-center mt-2 rounded-md shadow-md"
    >
      <div class="flex space-x-0">
        <router-link
          to="/"
          class="w-5 h-5 flex items-center justify-center bg-spotify-button rounded-full"
        >
          &lt;
        </router-link>
        <router-link
          to="/"
          class="w-5 h-5 flex items-center justify-center bg-spotify-button rounded-full"
        >
          &gt;
        </router-link>
      </div>
      <div class="-p-2">
        <router-link
          to="/register"
          class="mr-5 text-spotify-lightgray h-1 text-xs"
        >
          Sign up
        </router-link>
        <router-link
          to="/login"
          class="bg-white text-spotify-black px-3 py-1 rounded-lg text-xs mr-2"
        >
          Log in
        </router-link>
      </div>
    </div>

</template>

<script setup lang="ts"></script>

<style scoped>
.text-xs {
  font-size: 0.55rem;
  line-height: 1rem;
}
</style>


