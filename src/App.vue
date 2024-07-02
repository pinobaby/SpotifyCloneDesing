<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Navbar,
   Home
  }
});
</script>

<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <div class="content flex-grow overflow-y-auto">
        <router-view />
        <Home />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
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
  margin-left: 15rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex-grow: 1;
  overflow-y: auto;
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
