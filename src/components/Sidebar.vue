<template>
  <div class="sidebar w-1/4 text-spotify-white h-screen p-2 flex flex-col fixed  overflow-x-hidden">
    <div class="mb-2 bg-spotify-gray rounded-md pl-2">
      <nav class="space-y-0">
        <router-link to="/" class="py-2 flex items-center space-x-2">
          <SpotifyLogo class="h-3" />
        </router-link>

        <router-link to="/" class="py-2 flex items-center space-x-2">
          <HomeIcon class="h-3 w-3" />
          <span class="text-xs">Home</span>
        </router-link>

        <router-link to="/search" class="py-2 flex items-center space-x-2">
          <MagnifyingGlassIcon class="h-3 w-3" />
          <span class="text-xs">Search</span>
        </router-link>
      </nav>
    </div>

    <div class="flex-1 space-y-4">
      <div class="space-y-2">
        <div class="w-full bg-spotify-gray rounded-md p-4 text-left">
          <div class="flex">
            <stackIcon class="h-3 w-8 mt-0.5" />
            <span class="text-xs font-semibold mb-3 -ml-4">Your Library</span>
          </div>

          <div class="bg-spotify-cardSideBar rounded-md p-3 text-left text-xs -ml-2 -mr-2">
            Create your first playlist
            <div class="text-spotify-lightgray text-xs">
              It's easy, we'll help you
            </div>
            <button class="mt-2 bg-spotify-white text-spotify-black rounded-full px-3 py-0 inline-block text-xs">
              Create playlist
            </button>
          </div>
        </div>

        <div class="w-full bg-spotify-gray rounded-md p-4 text-left text-xs">
          <div class="bg-spotify-cardSideBar rounded-md p-4 text-left text-xs -ml-2 -mr-2 mb-16">
            Let's find some podcasts to follow
            <div class="text-spotify-lightgray text-xs">
              We'll keep you updated on new episodes
            </div>
            <button class="mt-2 bg-spotify-white text-spotify-black text-xs rounded-full px-2 py-0 inline-block">
              Browse podcasts
            </button>
          </div>

          <div class="flex flex-wrap space-x-3 text-xs text-spotify-lightgray text-start">
            <div>Legal</div>
            <div>Safety & Privacy Center</div>
            <div>Privacy Policy</div>
            <div>Cookies</div>
            <div>About Ads</div>
            <div>Accessibility</div>
            <div>Cookies</div>
          </div>

          <div class="flex mt-4">
            <button class="flex bg-spotify-colorbutton text-white rounded-full px-2 py-0 outline outline-offset-2 outline-1 text-xs">
              <GlobeAltIcon class="h-3 w-3 mt-0.5" />
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon, MagnifyingGlassIcon, GlobeAltIcon } from "@heroicons/vue/16/solid";
import SpotifyLogo from "./SpotifyLogo.vue";
import stackIcon from "./stackIcon.vue";
</script>

<style scoped>
.text-xs {
  font-size: 0.55rem;
  line-height: 1rem;
}
</style>

