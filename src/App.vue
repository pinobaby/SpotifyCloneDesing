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
  display: block;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 15rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
}

.main-content {
  display: block;
  height: 100vh;
}

.content {
  flex-grow: 1;
  overflow-y: auto;
  height: auto;
}

.content::-webkit-scrollbar {
  width: 6px;
}

.content::-webkit-scrollbar-track {
  background: #1e1e1e;
}

.content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.content::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

 <!-- <template>
  <div class="app-container">
    <div class="main-content">
      <div :class="{ 'full-screen': isFullScreen }">
        <Navbar v-if="!isFullScreen" />
        
        <div class="flex">
          <Sidebar v-if="!isFullScreen" />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

const route = useRoute();
const isFullScreen = computed(() => {
  return route.path === '/signup' || route.path === '/login';
});
</script>

<style>
.full-screen {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 30 rem;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
}

.main-content {
  margin-left: 15rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex-grow: 1;
  overflow-y: auto;
  height: 100vh;
}

.content::-webkit-scrollbar {
  width: 6px;
}

.content::-webkit-scrollbar-track {
  background: #1e1e1e;
}

.content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.content::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style> -->
