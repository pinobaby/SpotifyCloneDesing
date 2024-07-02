<template>
  <footer class="bg-spotify-backgroundMainContent text-spotify-white py-8">
    <div class="container grid grid-cols-4 gap-8 px-4">
      <div class="space-y-2">
        <h2 class="text-xs font-bold">Company</h2>
        <ul>
          <li><a href="#" class="text-xs hover:underline">About</a></li>
          <li><a href="#" class="text-xs hover:underline">Jobs</a></li>
          <li>
            <a href="#" class="text-xs hover:underline">For the Record</a>
          </li>
        </ul>
      </div>
      <div class="space-y-2">
        <h2 class="text-xs font-bold">Communities</h2>
        <ul>
          <li><a href="#" class="text-xs hover:underline">For Artists</a></li>
          <li><a href="#" class="text-xs hover:underline">Developers</a></li>
          <li><a href="#" class="text-xs hover:underline">Advertising</a></li>
          <li><a href="#" class="text-xs hover:underline">Investors</a></li>
          <li><a href="#" class="text-xs hover:underline">Vendors</a></li>
        </ul>
      </div>
      <div class="space-y-2">
        <h2 class="text-xs font-bold">Useful links</h2>
        <ul>
          <li><a href="#" class="text-xs hover:underline">Support</a></li>
          <li>
            <a href="#" class="text-xs hover:underline">Free Mobile App</a>
          </li>
        </ul>
      </div>
      <div class="space-y-2">
        <h2 class="text-xs font-bold">Spotify Plans</h2>
        <ul>
          <li>
            <a href="#" class="text-xs hover:underline">Premium Individual</a>
          </li>
          <li><a href="#" class="text-xs hover:underline">Premium Duo</a></li>
          <li>
            <a href="#" class="text-xs hover:underline">Premium Family</a>
          </li>
          <li>
            <a href="#" class="text-xs hover:underline">Premium Student</a>
          </li>
          <li><a href="#" class="text-xs hover:underline">Spotify Free</a></li>
        </ul>
      </div>
    </div>
    <div
      class="container mx-auto mt-8 flex justify-between items-center border-t border-spotify-gray pt-4"
    >
      <p class="text-xs mx-4">&copy; 2024 Spotify AB</p>
      <!-- <div class="flex space-x-4">
            <a href="#" class="text-white" aria-label="Instagram">
              <InstagramIcon class="w-6 h-6" />
            </a>
            <a href="#" class="text-white" aria-label="Twitter">
              <TwitterIcon class="w-6 h-6" />
            </a>
            <a href="#" class="text-white" aria-label="Facebook">
              <FacebookIcon class="w-6 h-6" />
            </a>
          </div> -->
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  components: {},
});
</script>

<style scoped>
.bg-spotify-black {
  background-color: #191414;
}

.text-spotify-white {
  color: #ffffff;
}

.border-spotify-gray {
  border-color: #282828;
}
.text-xs {
  font-size: 0.55rem /* 12px */;
  line-height: 1rem /* 16px */;
}
</style>
