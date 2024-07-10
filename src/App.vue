<template>
  <div class="app-container">
    <Sidebar v-if="!isFullScreen" />
    <div class="main-content">
      <div :class="{ 'full-screen': isFullScreen }">
      <Navbar v-if="!isFullScreen" />
      <div class="content flex-grow overflow-y-auto">
        <router-view />
        <Footer />
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const isFullScreen = computed(() => {
  return route.path === '/register' || route.path === '/login';
});
</script>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.signup-container {
  display: block;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 30rem;
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
}

.main-content {
  display: block;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.main-content {
  flex-grow: 1;
  overflow-y: auto;
  height: auto;
}

.main-content::-webkit-scrollbar {
  width: 6px;
}

.main-content::-webkit-scrollbar-track {
  background: #1e1e1e;
}

.main-content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.main-content::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>


