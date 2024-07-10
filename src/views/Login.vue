<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center bg-spotify-gradient text-white"
  >
    <div
      class="max-w-md w-auto space-y-8 p-10 bg-spotify-backgroundMainContent rounded-lg shadow-lg sm:max-w-lg lg:max-w-2xl"
    >
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="../assets/spotifyLogo.png"
          alt="Spotify"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
          Log in to Spotify
        </h2>
      </div>
      <div class="flex flex-col space-y-4 justify-center mx-20 w-2/3">
        <button
          class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-white hover:border-white bg-spotify-backgroundMainContent"
        >
          <img
            class="w-5 h-5 mr-2"
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
          />
          Continue with Google
        </button>
        <button
          class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-white hover:border-white bg-spotify-backgroundMainContent"
        >
          <img
            class="w-5 h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
            alt="Facebook"
          />
          Continue with Facebook
        </button>
        <button
          class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-white hover:border-white bg-spotify-backgroundMainContent"
        >
          <img
            class="w-5 h-5 mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQesa2rF2WhrA7Sl3iIoznL-gFpA0y0GB-tQ&s"
            alt="Apple"
          />
          Continue with Apple
        </button>
        <button
          class="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-white hover:border-white bg-spotify-backgroundMainContent"
        >
          Continue with phone number
        </button>
      </div>
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>

          <div class="relative flex justify-center text-sm"></div>
        </div>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="flex mx-20 mb-2">Email or username</div>
          <div>
            <label
              for="email-address"
              class="sr-only bg-spotify-backgroundMainContent"
              >Email or username</label
            >
            <input
              v-model="email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-auto mx-20 w-2/3 px-3 py-2 mb-2 bg-spotify-backgroundMainContent border hover:border-white border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
              placeholder="Email or username"
            />
            <div class="flex mx-20 mb-2">Password</div>
          </div>

          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="mx-20 w-2/3 px-3 py-2 bg-spotify-backgroundMainContent border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex mx-20">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-white">
              Remember me
            </label>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="py-3 px-28 border border-transparent text-sm font-medium rounded-full text-black bg-green-500 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Log In
          </button>
        </div>
        <div class="text-sm mx-48">
          <a
            href="#"
            class="font-medium text-white flex justify-center hover:border-white"
          >
            Forgot your password?
          </a>
        </div>
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>

          <div class="relative flex justify-center text-sm"></div>
        </div>
      </form>

      <div class="text-center mt-6">
        <p class="text-sm text-gray-500">
          Don't have an account?
          <router-link
            to="/signup"
            class="font-medium text-green-600 hover:border-white"
            >Sign up for Spotify</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  // Aquí puedes agregar la lógica para el envío del formulario
};
</script>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
</style>
